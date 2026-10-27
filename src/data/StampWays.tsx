export interface StampWay {
	stamps: number
	label: string
	description: string
	icon: string
	shape: 'round' | 'rect' | 'oval'
	ink: string
	x: number
	y: number
	rotate: number
}

const StampWays: StampWay[] = [
	{
		stamps: 1,
		label: 'Every $1',
		description: '1 Passport Stamp for every $1 you spend.',
		icon: '/icons/points.svg',
		shape: 'round',
		ink: '#765600',
		x: 7, y: 56, rotate: 14
	},
	{
		stamps: 20,
		label: 'Sign Up',
		description: 'Sign up with your email.',
		icon: '/icons/email.svg',
		shape: 'rect',
		ink: '#1a1209',
		x: 29, y: 12, rotate: -8
	},
	{
		stamps: 50,
		label: 'Birthday',
		description: 'On your birthday, every year.',
		icon: '/icons/birthdaycake.svg',
		shape: 'round',
		ink: '#a33522',
		x: 55, y: 9, rotate: -12
	},
	{
		stamps: 30,
		label: 'Referral',
		description: 'For every friend you refer.',
		icon: '/icons/referral.svg',
		shape: 'oval',
		ink: '#1a1209',
		x: 58, y: 56, rotate: 6
	},
	{
		stamps: 20,
		label: 'First Purchase',
		description: 'With your first empanada.',
		icon: '/icons/empanada.svg',
		shape: 'rect',
		ink: '#bf8000',
		x: 30, y: 60, rotate: 9
	}
]

export default StampWays
