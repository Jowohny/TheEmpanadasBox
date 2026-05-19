import type { Sauce, PresetBox } from "../data/ShipProducts";
import { useCart } from "../contexts/CartContext";

type MenuItemCardProps = {
	product: Sauce | PresetBox
}

const MenuItemCard = ({ product }: MenuItemCardProps) => {
	const { addLine, openDrawer } = useCart()

	const handleAdd = () => {
		if (product.type === 'sauce') {
			addLine({ type: 'sauce', product, quantity: 1 })
		} else {
			addLine({ type: 'preset-box', product, quantity: 1 })
		}
		openDrawer()
	}

	return (
		<div className="flex flex-col overflow-hidden rounded-[1.5rem] border border-[#ede5d8] bg-white shadow-sm">
			<div className="bg-[#f5efe6] p-5">
				<img
					src={product.image}
					loading="lazy"
					className="aspect-[4/3] w-full rounded-xl object-cover"
				/>
			</div>
			<div className="flex flex-1 flex-col gap-3 p-6">
				<h3 className="font-inter text-2xl font-black tracking-tight text-[#1a1209]">
					{product.name}
				</h3>
				<p className="text-sm font-light leading-relaxed text-[#5f5449]">
					{product.description}
				</p>

				{product.type === 'preset-box' && product.contents && product.contents.length > 0 && (
					<ul className="mt-1 flex flex-col gap-1.5">
						{product.contents.map((item) => (
							<li key={item} className="flex items-start gap-2 text-xs text-[#3a3020]">
								<span className="mt-[1px] leading-none text-[#bf8000]">✓</span>
								<span className="font-medium">{item}</span>
							</li>
						))}
					</ul>
				)}

				<button
					type="button"
					onClick={handleAdd}
					className="mt-auto self-start rounded-full border-2 border-black/20 bg-[#bf8000] px-6 py-3 font-mono text-xs font-black uppercase tracking-[0.18em] text-white shadow-md"
				>
					Add to Cart →
				</button>
			</div>
		</div>
	)
}

export default MenuItemCard
