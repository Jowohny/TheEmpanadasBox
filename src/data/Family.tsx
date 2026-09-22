export interface Member {
	name: string
	picture: string
	title: string
	description: string
}

export const Family: Member[] = [
	{
		name: 'Diego Nunez',
		picture: '',
		title: 'Founder',
		description: `A native of Buenos Aires, Argentina, Diego grew up immersed in the traditions of good
									food, shared tables, and relentless hard work. Having spent his entire life working in the
									food and empanada craft, Diego founded The Empanada's Box to bring the authentic
									taste of his home country to Cincinnati.`
	},
	{
		name: 'Fabiana Nunez',
		picture: '',
		title: 'Chief Operating Officer',
		description: `The operational backbone of our business, my wife, Fabiana oversees daily business
									execution and service quality, making sure every guest feels the warmth of our family
									table the moment they walk through our doors.`
	},
	{
		name: 'Lucas Nunez',
		picture: '',
		title: 'Director of Sales & Marketing',
		description: `Lucas, my nephew, leads sales and marketing to share our international flavors with new
									neighborhoods, corporate tables, and food festivals.`
	},
	{
		name: 'Tiago Nunez',
		picture: '',
		title: 'Director of Operations',
		description: `From streamlining kitchen systems and packaging logistics to scaling our storefront
									operations, my son, Tiago, keeps our quality high and every box moving smoothly from
									our ovens to your hands.`
	}
]