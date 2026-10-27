export interface RewardsTier {
	stamps: number
	reward: string
	description: string
	image: string
}

const RewardsTiers: RewardsTier[] = [
	{
		stamps: 45,
		reward: '1 Free Empanada',
		description: 'Pick any flavor on the world tour.',
		image: '/EmpanadaPics/Items Photos/BUENOS AIRES.jpg'
	},
	{
		stamps: 120,
		reward: '8 oz Chimichurri Sauce',
		description: 'A full 8 oz of our house-made chimichurri.',
		image: '/EmpanadaPics/Items Photos/CHIMICHURRI.jpg'
	},
	{
		stamps: 140,
		reward: 'Free Combo',
		description: 'Two empanadas plus a side.',
		image: '/EmpanadaPics/Items Photos/COMBO 1.jpg'
	},
	{
		stamps: 550,
		reward: 'Free 12-Pack Box',
		description: 'A full dozen empanadas on us.',
		image: '/EmpanadaPics/EzCaterer Menu/Empanadas by the Dozen.jpg'
	}
]

export default RewardsTiers
