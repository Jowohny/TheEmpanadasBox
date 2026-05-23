import { useEffect } from "react";
import { useCart } from "../contexts/CartContext";

const CartDrawer = () => {
	const { lines, location, isDrawerOpen, closeDrawer, removeLine, updateQuantity } = useCart()

	useEffect(() => {
		if (!isDrawerOpen) return
		const prev = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = prev
		}
	}, [isDrawerOpen])

	const allPriced = lines.length > 0 && lines.every((line) => typeof line.product.price === 'number')
	const subtotal = lines.reduce((sum, line) => sum + (line.product.price ?? 0) * line.quantity, 0)

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
								Pick a pack, a sampler, or a sauce <br /> They all land here.
							</p>
						</div>
					) : (
						<ul className="flex flex-col gap-6">
							{lines.map((line) => (
								<li key={line.id} className="flex gap-4">
									<img
										src={line.product.image}
										className="h-20 w-20 shrink-0 rounded-xl object-cover"
									/>
									<div className="flex flex-1 flex-col">
										<div className="flex items-start justify-between gap-3">
											<h3 className="font-inter text-base font-black leading-tight text-white">
												{line.product.name}
											</h3>
											<button
												type="button"
												onClick={() => removeLine(line.id)}
												className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-white/40"
											>
												Remove
											</button>
										</div>
										{line.type === 'custom-pack' && (
											<p className="mt-1 text-xs font-light text-white/60">
												{line.composition.map((c) => `${c.empanadaName} × ${c.count}`).join(', ')}
											</p>
										)}
										<div className="mt-3 flex items-center gap-3">
											<button
												type="button"
												onClick={() => updateQuantity(line.id, line.quantity - 1)}
												className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-white"
												aria-label="Decrease quantity"
											>
												-
											</button>
											<span className="font-mono text-sm font-black text-white">{line.quantity}</span>
											<button
												type="button"
												onClick={() => updateQuantity(line.id, line.quantity + 1)}
												className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-white"
												aria-label="Increase quantity"
											>
												+
											</button>
										</div>
									</div>
								</li>
							))}
						</ul>
					)}
				</div>

				<footer className="border-t border-white/10 px-7 py-6">
					{lines.length > 0 && (
						<div className="mb-4 flex items-center justify-between">
							<span className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-white/50">
								Subtotal
							</span>
							<span className="font-inter text-base font-black text-white">
								{allPriced ? `$${subtotal.toFixed(2)}` : 'See price at checkout'}
							</span>
						</div>
					)}
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
