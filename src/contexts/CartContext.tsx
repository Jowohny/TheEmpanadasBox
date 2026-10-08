import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Sauce, PresetBox, CustomPack, IndividualEmpanada } from '../data/ShipProducts';

export interface SauceLine {
	id: string
	type: 'sauce'
	product: Sauce
	quantity: number
}

export interface PresetLine {
	id: string
	type: 'preset-box'
	product: PresetBox
	quantity: number
}

export interface CustomPackLine {
	id: string
	type: 'custom-pack'
	product: CustomPack
	quantity: number
	composition: Array<{ empanadaName: string; count: number }>
}

export interface EmpanadaLine {
	id: string
	type: 'empanada'
	product: IndividualEmpanada
	quantity: number
}

export type CartLine = SauceLine | PresetLine | CustomPackLine | EmpanadaLine

export type CartLineInput =
	| Omit<SauceLine, 'id'>
	| Omit<PresetLine, 'id'>
	| Omit<CustomPackLine, 'id'>
	| Omit<EmpanadaLine, 'id'>

interface CartContextValue {
	lines: CartLine[]
	isDrawerOpen: boolean
	itemCount: number
	subtotal: number
	addLine: (line: CartLineInput) => void
	removeLine: (id: string) => void
	updateQuantity: (id: string, quantity: number) => void
	clear: () => void
	openDrawer: () => void
	closeDrawer: () => void
}

const STORAGE_KEY = 'theempanadasbox.cart.v1'

const CartContext = createContext<CartContextValue | null>(null)

function readPersisted(): { lines: CartLine[] } {
	if (typeof localStorage === 'undefined') return { lines: [] }
	try {
		const raw = localStorage.getItem(STORAGE_KEY)
		if (!raw) return { lines: [] }
		const parsed = JSON.parse(raw)
		return {
			lines: Array.isArray(parsed.lines) ? parsed.lines : [],
		}
	} catch {
		return { lines: [] }
	}
}

function newId(): string {
	if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
		return crypto.randomUUID()
	}
	return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const persisted = readPersisted()
	const [lines, setLines] = useState<CartLine[]>(persisted.lines)
	const [isDrawerOpen, setDrawerOpen] = useState(false)

	useEffect(() => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify({ lines }))
		} catch {

		}
	}, [lines])

	const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0)
	const subtotal = lines.reduce((sum, line) => sum + (line.product.price ?? 0) * line.quantity, 0)

	const addLine = (input: CartLineInput) => {
		setLines((prev) => {
			if (input.type === 'sauce' || input.type === 'preset-box' || input.type === 'empanada') {
				const existingIndex = prev.findIndex(
					(l) => l.type === input.type && l.product.id === input.product.id
				)
				if (existingIndex >= 0) {
					return prev.map((l, i) =>
						i === existingIndex ? { ...l, quantity: l.quantity + input.quantity } : l
					)
				}
			}
			const line = { ...input, id: newId() } as CartLine
			return [...prev, line]
		})
	}

	const removeLine = (id: string) => {
		setLines((prev) => prev.filter((line) => line.id !== id))
	}

	const updateQuantity = (id: string, quantity: number) => {
		if (quantity <= 0) {
			removeLine(id)
			return
		}
		setLines((prev) => prev.map((line) => (line.id === id ? { ...line, quantity } : line)))
	}

	const clear = () => setLines([])

	return (
		<CartContext.Provider
			value={{
				lines,
				isDrawerOpen,
				itemCount,
				subtotal,
				addLine,
				removeLine,
				updateQuantity,
				clear,
				openDrawer: () => setDrawerOpen(true),
				closeDrawer: () => setDrawerOpen(false)
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const ctx = useContext(CartContext)
	if (!ctx) throw new Error('useCart must be used within a CartProvider')
	return ctx
}
