import type { MembershipTier } from "../data/MembershipTiers";

type TierMultiplierProps = {
	tier: MembershipTier
	highlight?: boolean
}

const TierMultiplier = ({ tier, highlight }: TierMultiplierProps) => {
	const value = parseFloat(tier.multiplier)

	return (
		<div className="flex flex-col">
			<span
				data-multiplier-value={value}
				className={`origin-bottom-left font-inter font-black leading-[0.8] tracking-[-0.05em] ${highlight ? 'text-[#D09501]' : 'text-[#1a1209]'}`}
				style={{ fontSize: `${value * 6}rem` }}
			>
				{tier.multiplier}
			</span>
			<h3 className="mt-5 font-inter text-2xl font-black tracking-tight text-[#1a1209]">
				{tier.name}
			</h3>
			<p className="mt-1 max-w-[22ch] text-sm leading-snug text-[#5f5449]">
				{tier.requirement}
			</p>
		</div>
	)
}

export default TierMultiplier
