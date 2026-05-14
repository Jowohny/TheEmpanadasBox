export interface RewardsTier {
	stamps: number
	reward: string
	description: string
}

const RewardsTiers: RewardsTier[] = [
	{
		stamps: 25,
		reward: 'Side of Chimichurri',
		description: 'A free sauce add-on with your next order.'
	},
	{
		stamps: 50,
		reward: '1 Free Empanada',
		description: 'Pick any flavor on the world tour.'
	},
	{
		stamps: 70,
		reward: 'Free Combo',
		description: 'Two empanadas plus a side.'
	},
	{
		stamps: 150,
		reward: 'Free 12-Pack Box',
		description: 'A full dozen empanadas on us.'
	}
]

export default RewardsTiers
