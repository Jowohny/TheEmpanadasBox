import type { EventType } from "../data/EventTypes";

type EventTypeCardProps = {
	eventType: EventType
}

const EventTypeCard = ({ eventType }: EventTypeCardProps) => {
	return (
		<div className="flex flex-col bg-white rounded-[1.5rem] overflow-hidden shadow-sm border border-[#ede5d8]">
			<div className="relative h-72 w-full overflow-hidden">
				<img
					src={eventType.image}
					loading="lazy"
					className="h-full w-full object-cover"
				/>
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1209] via-[#1a1209]/40 to-transparent" />
				<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
					<p className="mb-2 font-mono text-xs font-black uppercase tracking-[0.24em] text-[#fec32f]">
						{eventType.tagline}
					</p>
					<h3 className="font-inter text-4xl font-black leading-tight tracking-tight">
						{eventType.name}
					</h3>
				</div>
			</div>

			<div className="flex flex-col gap-4 p-7">
				<p className="text-base font-light leading-relaxed text-[#5f5449]">
					{eventType.description}
				</p>
			</div>
		</div>
	)
}

export default EventTypeCard
