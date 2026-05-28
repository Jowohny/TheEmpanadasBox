export interface MembershipTier {
	name: string
	requirement: string
	multiplier: string
	benefit: string
}

const MembershipTiers: MembershipTier[] = [
	{
		name: 'Base',
		requirement: 'Free to join',
		multiplier: '1×',
		benefit: 'Earn 1 Passport Stamp for every $1 spent.'
	},
	{
		name: 'VIP',
		requirement: '300 Passport Stamps in the last 12 months',
		multiplier: '1.25×',
		benefit: 'Earn 1.25× Passport Stamps on qualifying purchases.'
	},
	{
		name: 'El Jefe',
		requirement: '600 Passport Stamps',
		multiplier: '2×',
		benefit: 'Earn 2× Passport Stamps on qualifying purchases.'
	}
]

export default MembershipTiers
