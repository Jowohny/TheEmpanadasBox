import type { RewardsTier } from "../data/RewardsTiers";

type RouteStopProps = {
	tier: RewardsTier
	x: number
	y: number
}

const RouteStop = ({ tier, x, y }: RouteStopProps) => {
	return (
		<div
			data-route-stop
			className="absolute w-56 -translate-x-1/2 -translate-y-1/2 text-center"
			style={{ left: `${x}%`, top: `${y}%` }}
		>
			<img
				src={tier.image}
				alt={tier.reward}
				className="mx-auto mb-4 h-28 w-28 rounded-full border-4 border-[#fec32f] object-cover"
			/>
			<p className="font-inter text-4xl font-black leading-none tracking-tight text-[#fec32f]">
				{tier.stamps}
			</p>
			<h3 className="mt-2 font-inter text-xl font-black tracking-tight text-[#faf7f2]">
				{tier.reward}
			</h3>
			<p className="mt-1 text-sm font-light leading-snug text-white/60">
				{tier.description}
			</p>
		</div>
	)
}

export default RouteStop
