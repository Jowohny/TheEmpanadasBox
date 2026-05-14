import type { RewardsTier } from "../data/RewardsTiers";

type TierCardProps = {
	tier: RewardsTier
}

const TierCard = ({ tier }: TierCardProps) => {
	return (
		<div className="flex flex-col items-center rounded-[1.5rem] border border-white/8 bg-white/4 p-8 text-center">
			<p className="font-inter text-6xl font-black leading-none text-[#fec32f]">
				{tier.stamps}
			</p>
			<p className="mt-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-white/50">
				Stamps
			</p>

			<div className="my-5 h-[2px] w-10 bg-[#fec32f]/40" />

			<h3 className="font-inter text-2xl font-black tracking-tight text-white">
				{tier.reward}
			</h3>
			<p className="mt-3 text-sm font-light leading-relaxed text-white/60">
				{tier.description}
			</p>
		</div>
	)
}

export default TierCard
