import { useCart, type CartLocation } from "../contexts/CartContext";

const LOCATIONS: CartLocation[] = ['Covington', 'Findlay Market']

const LocationSwitcher = () => {
	const { location, setLocation } = useCart()

	return (
		<div className="inline-flex items-center gap-1 rounded-full border border-[#ede5d8] bg-white p-1 shadow-sm">
			<span className="px-3 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#8a6f45]">
				Ship From
			</span>
			{LOCATIONS.map((loc) => {
				const selected = (location === loc)
				return (
					<button
						key={loc}
						type="button"
						onClick={() => setLocation(loc)}
						className={`rounded-full px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.18em] ${
							selected ? 'bg-[#1a1209] text-white' : 'text-[#6f6255]'
						}`}
					>
						{loc}
					</button>
				)
			})}
		</div>
	)
}

export default LocationSwitcher
