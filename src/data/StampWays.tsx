export interface StampWay {
	stamps: string
	category: string
	description: string
	icon: string
	featured?: boolean
}

const StampWays: StampWay[] = [
	{
		stamps: '1 Stamp',
		category: '$1 = 1 Stamp',
		description: '1 Passport Stamp per $1 spent.',
		icon: '/icons/points.svg'
	},
	{
		stamps: '20 Stamps',
		category: 'Sign Up',
		description: 'Sign up with your email.',
		icon: '/icons/email.svg'
	},
	{
		stamps: '50 Stamps',
		category: 'Bonus',
		description: 'Your birthday!',
		icon: '/icons/birthdaycake.svg',
		featured: true
	},
	{
		stamps: '30 Stamps',
		category: 'Referral',
		description: 'Refer a friend.',
		icon: '/icons/referral.svg'
	},
	{
		stamps: '20 Stamps',
		category: 'First Purchase',
		description: 'Get your first empanada.',
		icon: '/icons/empanada.svg'
	}
]

export default StampWays
