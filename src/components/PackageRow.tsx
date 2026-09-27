import type { EventPackage } from "../data/EventPackages";

type PackageRowProps = {
	pack: EventPackage
}

const PackageRow = ({ pack }: PackageRowProps) => {
	return (
		<div data-reveal className="grid grid-cols-1 gap-5 border-t border-[#1a1209]/10 py-8 md:grid-cols-[10rem_1fr] md:gap-10 md:py-10 lg:grid-cols-[13rem_1fr]">
			<div className="flex items-baseline gap-3 md:block text-center">
				<p className="font-inter text-4xl font-black leading-none text-[#1a1209] md:text-5xl lg:text-6xl">
					{pack.price}
				</p>
				<p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000] mt-1">
					Per Person
				</p>
			</div>

			<div>
				<div className="flex flex-wrap items-center gap-3">
					<h3 className="font-inter text-2xl font-black tracking-tight text-[#1a1209] md:text-3xl">
						{pack.name}
					</h3>
					{pack.popular && (
						<span className="rounded-full bg-[#fec32f] px-3 py-1 font-mono text-[10px] font-black uppercase tracking-[0.18em] text-[#765600]">
							Most Popular
						</span>
					)}
				</div>

				<div className="mt-5 flex flex-col gap-5 md:mt-6">
					<div>
						<p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">
							Food
						</p>
						<p className="mt-2 text-base font-light leading-relaxed text-[#64605b] md:text-lg">
							{pack.food}
						</p>
					</div>

					<div>
						<p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">
							Bar
						</p>
						<p className="mt-2 text-base font-light leading-relaxed text-[#64605b] md:text-lg">
							{pack.barName}
						</p>
						{pack.barBrands && (
							<p className="mt-2 text-sm font-light leading-relaxed text-[#8a7f70]">
								{pack.barBrands.join(' · ')}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default PackageRow
