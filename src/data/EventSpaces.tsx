export interface SpaceDetail {
	label: string
	value: string
}

export interface EventSpace {
	name: string
	tagline: string
	description: string
	image: string
	amenities: string[]
	details: SpaceDetail[]
	detailsNote?: string
}

const EventSpaces: EventSpace[] = [
	{
		name: 'The Back Bar',
		tagline: 'Intimate & Exclusive',
		description: 'An exclusive, semi-private area with direct access to our lively bar. Perfect for cocktail receptions, small gatherings, and celebrations that want to feel the energy of the main room while maintaining a dedicated space.',
		image: '/covington.jpg',
		amenities: [
			'Dedicated Bartender',
			'Lounge & High-Top Seating',
			'A/V Capabilities'
		],
		details: [
			{ label: 'Rental Fee', value: 'Starting at $500' },
			{ label: 'Bar Minimum', value: '$1,500' }
		],
		detailsNote: 'Tuesday – Sunday'
	},
	{
		name: 'Full Restaurant Buyout',
		tagline: 'The Ultimate Experience',
		description: 'Take over the entire destination. Complete access to the main dining area, the back bar, and dedicated service staff to create a fully customized, unforgettable event for your large group.',
		image: '/findlay.png',
		amenities: [
			'Full Staff Allocation',
			'Custom Seating Arrangements',
			'Full A/V Control'
		],
		details: [
			{ label: 'Rental Fee', value: 'Custom Quote' },
			{ label: 'Minimum', value: 'Custom Quote' }
		]
	}
]

export default EventSpaces
