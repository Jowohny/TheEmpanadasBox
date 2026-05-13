import type { StampWay } from "../data/StampWays";

type StampWayCardProps = {
	stampWay: StampWay
}

const StampWayCard = ({ stampWay }: StampWayCardProps) => {
	const { stamps, category, description, icon, featured } = stampWay;

	return (
		<div className={`relative flex flex-col items-center rounded-[1.5rem] border border-[#ede5d8] bg-white p-7 text-center shadow-sm ${featured ? '-translate-y-4' : ''}`}>
			{featured && (
				<div className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1209] shadow-md">
					<img src="/star.svg" className="h-4 w-4" />
				</div>
			)}

			<div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full ${featured ? 'bg-[#fec32f]' : 'bg-[#f5efe6]'}`}>
				<img src={icon} className="h-7 w-7" />
			</div>

			<h3 className="font-inter text-2xl font-black tracking-tight text-[#1a1209]">
				{stamps}
			</h3>

			<span className={`mt-3 inline-block rounded-full px-3 py-1 font-mono text-[10px] font-black uppercase tracking-[0.18em] ${featured ? 'bg-[#fec32f] text-[#1a1209]' : 'bg-[#f8f2e9] text-[#8a6f45]'}`}>
				{category}
			</span>

			<p className="mt-3 text-sm text-[#5f5449]">
				{description}
			</p>
		</div>
	)
}

export default StampWayCard
