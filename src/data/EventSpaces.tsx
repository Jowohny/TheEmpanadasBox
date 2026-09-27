export interface SpaceDetail {
	label: string
	value: string
}

export interface EventSpace {
	name: string
	tagline: string
	description: string
	image: string
	idealFor?: string
	amenities: string[]
	details: SpaceDetail[]
	minimums?: SpaceDetail[]
	detailsNote?: string
}

const EventSpaces: EventSpace[] = [
	{
		name: 'The Back Bar & Lounge',
		tagline: 'Intimate & Exclusive',
		description: 'A private event space tucked behind our main counter, complete with a dedicated 3-tap draft system, custom cocktail bar, and private seating.',
		image: '/covington.jpg',
		idealFor: 'Birthday celebrations, happy hours, rehearsal dinners, and showers.',
		amenities: [
			'Dedicated 3-Tap Draft System',
			'Custom Cocktail Bar',
			'Private Seating',
			'A/V Capabilities'
		],
		details: [
			{ label: 'Capacity', value: '20–40 guests' },
			{ label: 'Seated Dining', value: '30 guests' },
			{ label: 'Hosted Window', value: '2 hours' },
			{ label: 'Room Rental', value: 'No rental fee' }
		],
		minimums: [
			{ label: 'Mon – Wed', value: '$500' },
			{ label: 'Thu & Weekend Brunch', value: '$1,000' },
			{ label: 'Fri – Sat Evening', value: '$1,500' }
		],
		detailsNote: 'Additional hours available upon request.'
	},
	{
		name: 'Full Restaurant Buyout',
		tagline: 'Take over the entire destination.',
		description: 'Take over the entire restaurant. You and your guests receive exclusive access to the main dining room, the back bar and lounge, front street-facing seating/patio, and a fully dedicated kitchen and service crew for a completely customized event.',
		image: '/findlay.png',
		amenities: [
			'Full Staff & Kitchen Allocation',
			'Both Bars & Service Wells Open',
			'Custom Seating & Buffet Arrangements',
			'Full A/V & Sound Control'
		],
		details: [
			{ label: 'Occupancy', value: 'Up to ~100+ guests' },
			{ label: 'Rental Fee', value: '$0 — waived with minimum spend' },
			{ label: 'F&B Minimum', value: 'Custom quote by day & time' },
			{ label: 'Format', value: 'Passed service, grazing stations, or custom spreads' }
		],
		detailsNote: 'Buyouts can be booked using our per-person package tiers ($35–$75) or structured around custom food stations and open consumption bar tabs.'
	}
]

export default EventSpaces
