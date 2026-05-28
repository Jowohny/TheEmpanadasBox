import type { MembershipTier } from "../data/MembershipTiers";

type MembershipTierCardProps = {
	tier: MembershipTier
}

const MembershipTierCard = ({ tier }: MembershipTierCardProps) => {
	return (
		<div className="flex flex-col gap-4 rounded-[1.5rem] border border-[#ede5d8] bg-white p-8 shadow-sm">
			<p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">
				Tier
			</p>
			<h3 className="font-inter text-4xl font-black tracking-tight text-[#1a1209]">
				{tier.name}
			</h3>
			<div className="flex items-baseline gap-2">
				<span className="font-inter text-5xl font-black leading-none text-[#D09501]">
					{tier.multiplier}
				</span>
				<span className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#8a6f45]">
					Stamps
				</span>
			</div>
			<div className="h-[2px] w-12 bg-[#bf8000]" />
			<p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#5f5449]">
				{tier.requirement}
			</p>
			<p className="text-sm font-light leading-relaxed text-[#64605b]">
				{tier.benefit}
			</p>
		</div>
	)
}

export default MembershipTierCard
