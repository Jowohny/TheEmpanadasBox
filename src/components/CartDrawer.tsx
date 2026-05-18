import { useCart } from "../contexts/CartContext";

const CartDrawer = () => {
	const { lines, location, isDrawerOpen, closeDrawer } = useCart()

	return (
		<>
			<div
				onClick={closeDrawer}
				className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
					isDrawerOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
				}`}
			/>

			<aside
				className={`fixed right-0 top-0 z-50 flex h-screen w-[28rem] flex-col bg-[#0d0c0b] text-white shadow-2xl transition-transform duration-300 ${
					isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<header className="flex items-start justify-between border-b border-white/10 px-7 py-6">
					<div>
						<p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#fec32f]">
							Cart
						</p>
						<h2 className="font-inter text-2xl font-black tracking-tight text-white">
							Your Passport
						</h2>
					</div>
					<button
						type="button"
						onClick={closeDrawer}
						aria-label="Close cart"
						className="text-white/60 scale-[1.7]"
					>
						x
					</button>
				</header>

				<div className="flex-1 overflow-y-auto px-7 py-6">
					{lines.length === 0 ? (
						<div className="flex h-full flex-col items-center justify-center text-center">
							<p className="font-inter text-3xl font-black leading-tight text-white">
								Your cart <br /> is <span className="italic text-[#fec32f]">empty.</span>
							</p>
							<p className="mt-4 max-w-xs text-sm font-light text-white/60">
								Pick a pack, a sampler, or a sauce - they all land here.
							</p>
						</div>
					) : (
						<ul className="flex flex-col gap-5">
						</ul>
					)}
				</div>

				<footer className="border-t border-white/10 px-7 py-6">
					<p className="mb-4 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-white/50">
						Shipping from <span className="text-[#fec32f]">{location}</span>
					</p>
					<button
						type="button"
						disabled={lines.length === 0}
						className="w-full rounded-full border-2 border-black/20 bg-[#fec32f] px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wide text-[#1a1209] shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
					>
						Checkout →
					</button>
				</footer>
			</aside>
		</>
	)
}

export default CartDrawer
