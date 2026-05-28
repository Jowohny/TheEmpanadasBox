export interface RewardsTier {
	stamps: number
	reward: string
	description: string
}

const RewardsTiers: RewardsTier[] = [
	{
		stamps: 45,
		reward: '1 Free Empanada',
		description: 'Pick any flavor on the world tour.'
	},
	{
		stamps: 120,
		reward: '8 oz Chimichurri Sauce',
		description: 'A full 8 oz of our house-made chimichurri.'
	},
	{
		stamps: 140,
		reward: 'Free Combo',
		description: 'Two empanadas plus a side.'
	},
	{
		stamps: 550,
		reward: 'Free 12-Pack Box',
		description: 'A full dozen empanadas on us.'
	}
]

export default RewardsTiers
