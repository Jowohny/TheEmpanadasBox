import type { EventSpace } from "../data/EventSpaces";

type SpaceCardProps = {
	space: EventSpace
	reverse?: boolean
}

const SpaceCard = ({ space, reverse }: SpaceCardProps) => {
	return (
		<div className={`flex items-center gap-16 ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
			<div className="w-1/2 shrink-0">
				<img
					src={space.image}
					loading="lazy"
					className="h-[28rem] w-full rounded-[1.5rem] object-cover"
				/>
			</div>

			<div className="flex w-1/2 flex-col">
				<h3 className="font-inter text-5xl font-black tracking-tight text-[#faf7f2]">
					{space.name}
				</h3>
				<p className="mt-2 font-mono text-sm font-medium tracking-wide text-[#fec32f]">
					{space.tagline}
				</p>
				<p className="mt-6 text-base font-light leading-relaxed text-white/70">
					{space.description}
				</p>

				<div className="mt-8 grid grid-cols-2 gap-8">
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
			</div>
		</div>
	)
}

export default SpaceCard
