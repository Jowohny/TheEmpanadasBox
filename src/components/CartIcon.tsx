import { useCart } from "../contexts/CartContext";

const CartIcon = () => {
	const { itemCount, openDrawer } = useCart()

	return (
		<button
			type="button"
			onClick={openDrawer}
			className="fixed right-6 top-36 z-30 inline-flex items-center gap-2 rounded-full border-2 border-black/20 bg-[#fec32f] px-5 py-3 shadow-lg"
		>
			<img src="/icons/shoppingcart.svg" className="h-5" />
			<span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-[#1a1209]">
				Cart
			</span>
			{itemCount > 0 && (
				<span className="ml-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#1a1209] px-1.5 font-mono text-[10px] font-black text-[#fec32f]">
					{itemCount}
				</span>
			)}
		</button>
	)
}

export default CartIcon
