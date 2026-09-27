export interface EventPackage {
	name: string
	price: string
	popular?: boolean
	food: string
	barName: string
	barBrands?: string[]
}

const EventPackages: EventPackage[] = [
	{
		name: 'The Mixer Package',
		price: '$35',
		food: '2 empanadas per guest, unlimited house chips, salsa roja, and scratch chimichurri.',
		barName: 'Unlimited Beer & Wine Package',
		barBrands: [
			'Rhinegeist Truth',
			'Garage Beer',
			'Modelo Especial draft',
			'Cincy Light',
			'MadTree Amber',
			'Corona Extra & NA',
			'High Noon Seltzers',
			'House wines'
		]
	},
	{
		name: 'The Social Package',
		price: '$50',
		popular: true,
		food: '3 empanadas per guest, choice of 3 house sides, chips & salsa, and chimichurri.',
		barName: 'Standard Full Bar Package — all beer & wine, plus:',
		barBrands: [
			'Old Forester 86 Bourbon',
			'Tanqueray Gin',
			'Crown Russe Vodka',
			'El Jimador Tequila',
			'Bounty White Rum',
			'Captain Morgan Spiced Rum',
			'Jameson Irish Whiskey'
		]
	},
	{
		name: 'The Premier Package',
		price: '$75',
		food: 'Unlimited passed empanadas (first 90 minutes), choice of 4 house sides, and sweet homemade alfajores for dessert.',
		barName: 'Premium Craft Bar — everything in Standard, plus:',
		barBrands: [
			'New Riff Bottled-in-Bond Bourbon',
			'Five Stories OTR Gin',
			'Tito’s',
			'Espolòn Reposado Tequila',
			'400 Conejos Mezcal'
		]
	},
	{
		name: 'The Brunch Package',
		price: '$40',
		food: 'Breakfast burritos, warm brunch fare, and morning breakfast bites.',
		barName: 'Bottomless Mimosas, fresh drip coffee, and soft drinks.'
	}
]

export default EventPackages
