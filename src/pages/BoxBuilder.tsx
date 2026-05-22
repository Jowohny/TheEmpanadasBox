import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BoxVisualization from "../components/BoxVisualization";
import CartDrawer from "../components/CartDrawer";
import CartIcon from "../components/CartIcon";
import EmpanadaPicker, { type CompositionEntry } from "../components/EmpanadaPicker";
import { useCart } from "../contexts/CartContext";
import Empanadas from "../data/Empanadas";
import { CustomPacks } from "../data/ShipProducts";

const VALID_SIZES = [8, 12] as const
type PackSize = typeof VALID_SIZES[number]

const isValidSize = (n: number): n is PackSize =>
	(VALID_SIZES as readonly number[]).includes(n)

function distribute(flavors: string[], size: number): CompositionEntry[] {
	const n = flavors.length
	if (n === 0) return []
	const base = Math.floor(size / n)
	const remainder = size % n
	return flavors.map((name, i) => ({
		name,
		count: base + (i < remainder ? 1 : 0)
	}))
}

function compositionToSlots(composition: CompositionEntry[], size: number): Array<string | null> {
	const slots: Array<string | null> = []
	for (const { name, count } of composition) {
		for (let i = 0; i < count; i++) slots.push(name)
	}
	while (slots.length < size) slots.push(null)
	return slots
}

const BoxBuilder = () => {
	const { size: sizeParam } = useParams<{ size: string }>()
	const navigate = useNavigate()
	const { addLine, openDrawer } = useCart()
	const sizeNum = Number(sizeParam)
	const valid = isValidSize(sizeNum)

	const [composition, setComposition] = useState<CompositionEntry[]>([])
	const [autofill, setAutofill] = useState(true)

	useEffect(() => {
		if (!valid) navigate('/ShipNationwide', { replace: true })
	}, [valid, navigate])

	if (!valid) return null

	const pack = CustomPacks.find((p) => p.size === sizeNum)
	if (!pack) return null

	const totalSlots = composition.reduce((sum, c) => sum + c.count, 0)
	const slots = compositionToSlots(composition, sizeNum)

	const handleClickEmpanada = (name: string) => {
		if (autofill) {
			const existingIndex = composition.findIndex((c) => c.name === name)
			let flavors: string[]
			if (existingIndex >= 0) {
				flavors = composition.filter((_, i) => i !== existingIndex).map((c) => c.name)
			} else {
				if (composition.length >= sizeNum) return
				flavors = [...composition.map((c) => c.name), name]
			}
			setComposition(distribute(flavors, sizeNum))
		} else {
			if (totalSlots >= sizeNum) return
			const existingIndex = composition.findIndex((c) => c.name === name)
			if (existingIndex >= 0) {
				setComposition((prev) =>
					prev.map((c, i) => (i === existingIndex ? { ...c, count: c.count + 1 } : c))
				)
			} else {
				setComposition((prev) => [...prev, { name, count: 1 }])
			}
		}
	}

	const handleDecrement = (name: string) => {
		setComposition((prev) =>
			prev.flatMap((c) => {
				if (c.name !== name) return [c]
				if (c.count <= 1) return []
				return [{ ...c, count: c.count - 1 }]
			})
		)
	}

	const handleToggleAutofill = () => {
		if (!autofill) {
			setComposition((prev) => distribute(prev.map((c) => c.name), sizeNum))
		} 
		setAutofill((a) => !a)
	}

	const handleCommit = () => {
		if (totalSlots !== sizeNum) return
		addLine({
			type: 'custom-pack',
			product: pack,
			quantity: 1,
			composition: composition.map((c) => ({ empanadaName: c.name, count: c.count }))
		})
		navigate('/ShipNationwide')
		openDrawer()
	}

	return (
		<div className="min-w-screen min-h-screen bg-[#faf7f2]">
			<CartIcon />
			<CartDrawer />

			<div className="px-20 pb-24 pt-12">
				<div className="mx-auto max-w-[90rem]">
					<button
						type="button"
						onClick={() => navigate('/ShipNationwide')}
						className="mb-10 inline-flex items-center gap-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-[#6f6255]"
					>
						← Back to menu
					</button>

					<div className="mb-12 max-w-3xl">
						<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Custom Build
						</p>
						<h1 className="mb-4 font-inter text-7xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Build your <span className="italic text-[#D09501]">{sizeNum}-pack.</span>
						</h1>
						<div className="mb-5 h-[2px] w-12 bg-[#bf8000]" />
						<p className="text-xl font-light tracking-wide text-[#64605b]">
							Pick your flavors, watch the box fill up, then add it to your cart.
						</p>
					</div>

					<div className="grid grid-cols-[38%_1fr] gap-12">
						<EmpanadaPicker
							empanadas={Empanadas}
							composition={composition}
							autofill={autofill}
							packSize={sizeNum}
							onClickEmpanada={handleClickEmpanada}
							onDecrement={handleDecrement}
							onToggleAutofill={handleToggleAutofill}
							onCommit={handleCommit}
						/>
						<BoxVisualization
							slots={slots}
							empanadas={Empanadas}
							onClear={() => setComposition([])}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BoxBuilder
