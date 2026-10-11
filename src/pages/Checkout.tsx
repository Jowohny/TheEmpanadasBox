import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import ShippingRate from '../components/ShippingRate';

const money = (amount: number) => `$${amount.toFixed(2)}`

const SectionLabel = ({ children }: { children: string }) => (
	<div className="mb-6">
		<p className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
			{children}
		</p>
		<div className="mt-2 h-[1px] w-12 bg-[#bf8000]/40" />
	</div>
)

const Checkout = () => {
	const { lines, itemCount, subtotal, removeLine, updateQuantity } = useCart()
	const allPriced = lines.length > 0 && lines.every((line) => typeof line.product.price === 'number')
	const navigate = useNavigate()

	return (
		<div className="min-w-screen min-h-screen bg-[#faf7f2]">
			<div className="mx-auto max-w-[90rem] px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20">
				<div className="mb-10 max-w-3xl md:mb-14">
					<p className="mb-3 md:mb-4 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
						Checkout
					</p>
					<h1 className="mb-4 font-inter text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
						Almost <span className="italic text-[#D09501]">there.</span>
					</h1>
					<div className="mb-5 h-[2px] w-12 bg-[#bf8000]" />
					<p className="text-base md:text-lg font-light tracking-wide text-[#64605b]">
						Review your box, then tell us where it&rsquo;s headed.
					</p>
				</div>

				{lines.length === 0 ? (
					<div className="border-t border-[#1a1209]/10 py-16 text-center">
						<h2 className="font-inter text-2xl md:text-3xl font-black tracking-tight text-[#1a1209]">
							Your cart is empty.
						</h2>
						<p className="mx-auto mt-4 max-w-md text-base font-light leading-relaxed text-[#64605b]">
							Build a box or grab a sampler, then come back to check out.
						</p>
						<button
							type="button"
							onClick={() => navigate('/ShipNationwide')}
							className="mt-8 rounded-full border-2 border-black/20 bg-[#bf8000] px-7 py-3 font-mono text-xs font-black uppercase tracking-[0.18em] text-white shadow-md md:px-8 md:py-4"
						>
							Shop Boxes →
						</button>
					</div>
				) : (
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
						<div>
							<SectionLabel>Your Order</SectionLabel>

							<ul className="flex flex-col">
								{lines.map((line) => (
									<li key={line.id} className="flex gap-5 border-t border-[#1a1209]/10 py-6">
										<img
											src={line.product.image}
											loading="lazy"
											className="h-24 w-24 shrink-0 rounded-xl bg-[#ede5d8] object-cover"
										/>
										<div className="flex flex-1 flex-col">
											<div className="flex items-start justify-between gap-4">
												<h3 className="font-inter text-lg md:text-xl font-black leading-tight tracking-tight text-[#1a1209]">
													{line.product.name}
												</h3>
												<button
													type="button"
													onClick={() => removeLine(line.id)}
													className="shrink-0 font-mono text-[10px] font-black uppercase tracking-[0.18em] text-[#8a7f70] hover:text-[#a33522]"
												>
													Remove
												</button>
											</div>

											{line.type === 'custom-pack' && (
												<p className="mt-2 text-xs font-light leading-relaxed text-[#64605b]">
													{line.composition.map((c) => `${c.empanadaName} × ${c.count}`).join(' · ')}
												</p>
											)}

											<div className="mt-4 flex items-center gap-3">
												<button
													type="button"
													onClick={() => updateQuantity(line.id, line.quantity - 1)}
													className="flex h-7 w-7 items-center justify-center rounded-full border border-[#1a1209]/20 font-mono text-[#1a1209]"
													aria-label="Decrease quantity"
												>
													-
												</button>
												<span className="font-mono text-sm font-black text-[#1a1209]">{line.quantity}</span>
												<button
													type="button"
													onClick={() => updateQuantity(line.id, line.quantity + 1)}
													className="flex h-7 w-7 items-center justify-center rounded-full border border-[#1a1209]/20 font-mono text-[#1a1209]"
													aria-label="Increase quantity"
												>
													+
												</button>
											</div>
										</div>
									</li>
								))}
							</ul>

							<div className="mt-14">
								<SectionLabel>Shipping Address</SectionLabel>
								<div className="max-w-2xl">
									<ShippingRate />
								</div>
							</div>
						</div>

						<div className="lg:sticky lg:top-40 lg:self-start">
							<SectionLabel>Summary</SectionLabel>
							<dl className="flex flex-col">
								<div className="flex items-baseline justify-between border-t border-[#1a1209]/10 py-4">
									<dt className="text-sm font-light text-[#64605b]">Items</dt>
									<dd className="font-inter text-base font-black text-[#1a1209]">{itemCount}</dd>
								</div>
								<div className="flex items-baseline justify-between border-t border-[#1a1209]/10 py-4">
									<dt className="text-sm font-light text-[#64605b]">Subtotal</dt>
									<dd className="font-inter text-base font-black text-[#1a1209]">
										{allPriced ? money(subtotal) : '—'}
									</dd>
								</div>
								<div className="flex items-baseline justify-between border-t border-[#1a1209]/10 py-4">
									<dt className="text-sm font-light text-[#64605b]">Shipping</dt>
									<dd className="font-mono text-xs text-[#8a7f70]">Calculate below</dd>
								</div>
								<div className="flex items-baseline justify-between border-t-2 border-[#1a1209]/20 py-5">
									<dt className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">
										Total
									</dt>
									<dd className="text-right">
										<span className="font-inter text-xl font-black text-[#1a1209]">
											{allPriced ? money(subtotal) : '—'}
										</span>
										<span className="mt-1 block font-mono text-[10px] font-medium tracking-wide text-[#8a7f70]">
											before tax &amp; shipping
										</span>
									</dd>
								</div>
							</dl>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Checkout
