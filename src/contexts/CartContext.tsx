import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Sauce, PresetBox, CustomPack } from '../data/ShipProducts';

export type CartLocation = 'Covington' | 'Findlay Market'

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

export type CartLine = SauceLine | PresetLine | CustomPackLine
export type CartLineInput =
	| Omit<SauceLine, 'id'>
	| Omit<PresetLine, 'id'>
	| Omit<CustomPackLine, 'id'>

interface CartContextValue {
	lines: CartLine[]
	location: CartLocation
	isDrawerOpen: boolean
	itemCount: number
	addLine: (line: CartLineInput) => void
	removeLine: (id: string) => void
	updateQuantity: (id: string, quantity: number) => void
	clear: () => void
	setLocation: (loc: CartLocation) => void
	openDrawer: () => void
	closeDrawer: () => void
}

const STORAGE_KEY = 'theempanadasbox.cart.v1'
const DEFAULT_LOCATION: CartLocation = 'Covington'

const CartContext = createContext<CartContextValue | null>(null)

function readPersisted(): { lines: CartLine[]; location: CartLocation } {
	if (typeof localStorage === 'undefined') return { lines: [], location: DEFAULT_LOCATION }
	try {
		const raw = localStorage.getItem(STORAGE_KEY)
		if (!raw) return { lines: [], location: DEFAULT_LOCATION }
		const parsed = JSON.parse(raw)
		return {
			lines: Array.isArray(parsed.lines) ? parsed.lines : [],
			location: parsed.location === 'Findlay Market' ? 'Findlay Market' : DEFAULT_LOCATION
		}
	} catch {
		return { lines: [], location: DEFAULT_LOCATION }
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
	const [location, setLocation] = useState<CartLocation>(persisted.location)
	const [isDrawerOpen, setDrawerOpen] = useState(false)

	useEffect(() => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify({ lines, location }))
		} catch {

		}
	}, [lines, location])

	const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0)

	const addLine = (input: CartLineInput) => {
		const line = { ...input, id: newId() } as CartLine
		setLines((prev) => [...prev, line])
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
				location,
				isDrawerOpen,
				itemCount,
				addLine,
				removeLine,
				updateQuantity,
				clear,
				setLocation,
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
