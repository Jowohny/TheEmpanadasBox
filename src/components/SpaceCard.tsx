import type { EventSpace } from "../data/EventSpaces";

type SpaceCardProps = {
	space: EventSpace
	reverse?: boolean
}

const SpaceCard = ({ space, reverse }: SpaceCardProps) => {
	return (
		<div className={`flex flex-col gap-8 md:items-center md:gap-16 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
			<div data-slide={reverse ? 'right' : 'left'} className="w-full shrink-0 md:w-1/2">
				<img
					src={space.image}
					loading="lazy"
					className="h-64 w-full rounded-[1.5rem] object-cover md:h-[28rem]"
				/>
			</div>

			<div data-slide={reverse ? 'left' : 'right'} className="flex w-full flex-col md:w-1/2">
				<h3 className="font-inter text-3xl font-black tracking-tight text-[#faf7f2] md:text-5xl">
					{space.name}
				</h3>
				<p className="mt-2 font-mono text-sm font-medium tracking-wide text-[#fec32f]">
					{space.tagline}
				</p>
				<p className="mt-6 text-base font-light leading-relaxed text-white/70">
					{space.description}
				</p>

				{space.idealFor && (
					<p className="mt-5 text-sm font-light leading-relaxed text-white/60">
						<span className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#fec32f]">
							Ideal for:{' '}
						</span>
						{space.idealFor}
					</p>
				)}

				<div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
					<div>
						<p className="mb-3 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#fec32f]">
							Amenities
						</p>
						<ul className="flex flex-col gap-2">
							{space.amenities.map((amenity) => (
								<li key={amenity} className="flex items-start gap-2 text-sm text-white/85">
									<span className="mt-[1px] inline-block leading-none text-[#fec32f]">✓</span>
									<span className="font-medium">{amenity}</span>
								</li>
							))}
						</ul>
					</div>

					<div>
						<p className="mb-3 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#fec32f]">
							Details
						</p>
						<ul className="flex flex-col gap-2">
							{space.details.map((detail) => (
								<li key={detail.label} className="text-sm">
									<span className="font-bold text-white/90">{detail.label}:</span>{' '}
									<span className="font-medium text-white/70">{detail.value}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				{space.minimums && (
					<div className="mt-8 border-t border-white/10 pt-6">
						<p className="mb-4 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#fec32f]">
							Food &amp; Beverage Minimums
						</p>
						<div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
							{space.minimums.map((minimum, i) => (
								<div
									key={minimum.label}
									className={`flex-1 ${i > 0 ? 'sm:border-l sm:border-white/10 sm:pl-5' : ''} ${i < space.minimums!.length - 1 ? 'sm:pr-5' : ''}`}
								>
									<p className="font-inter text-2xl font-black leading-none text-white md:text-3xl">
										{minimum.value}
									</p>
									<p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
										{minimum.label}
									</p>
								</div>
							))}
						</div>
					</div>
				)}

				{space.detailsNote && (
					<p className="mt-6 text-xs font-light leading-relaxed text-white/45">
						{space.detailsNote}
					</p>
				)}
			</div>
		</div>
	)
}

export default SpaceCard
