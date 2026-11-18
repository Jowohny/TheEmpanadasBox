export interface Member {
	name: string
	picture: string
	picturePosition?: string
	title: string
	description: string
}

export const Family: Member[] = [
	{
		name: 'Diego Nunez',
		picture: '/AboutUs/Diego.jpg',
		picturePosition: '50% 8%',
		title: 'Founder',
		description: `A native of Argentina. Diego grew up immersed in the food business. From his father and
									brothers running a bakery in his hometown of Mar del Plata, to working in countless bakeries,
									empanada shops, and restaurants for over three decades. Having spent his entire life working in
									the food and empanada craft, Diego founded The Empanada's Box to bring the authentic taste
									of his home country to Cincinnati.`
	},
	{
		name: 'Fabiana Nunez',
		picture: '/AboutUs/Fabiana.jpeg',
		picturePosition: '50% 18%',
		title: 'Chief Operating Officer',
		description: `The operational backbone of our business, Fabiana oversees daily business execution and
									service quality, making sure every guest feels the warmth of our family table the moment they
									walk through our doors.`
	},
	{
		name: 'Lucas Nunez',
		picture: '/AboutUs/Lucas.JPG',
		picturePosition: '50% 22%',
		title: 'Director of Sales & Marketing',
		description: `Lucas leads sales and marketing to share our international flavors with new neighborhoods,
									corporate tables, and food festivals.`
	},
	{
		name: 'Tiago Nunez',
		picture: '/AboutUs/Tiago.jpeg',
		picturePosition: '50% 12%',
		title: 'Director of Operations',
		description: `From streamlining kitchen systems and packaging logistics to scaling our storefront operations,
									Tiago keeps our quality high and every box moving smoothly from our ovens to your hands.`
	}
]