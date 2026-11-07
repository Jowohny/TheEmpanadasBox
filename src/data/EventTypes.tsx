export interface EventType {
	name: string
	image: string
	tagline: string
	description: string
}

const EventTypes: EventType[] = [
	{
		name: 'Weddings',
		image: '/Events/IMG_8933.jpg',
		tagline: 'For that once in a lifetime moment.',
		description: 'Dedicated bar and staff during cocktail hour, varieties of empanadas to savor throughout the night, and plenty of space to plan what is needed.'
	},
	{
		name: 'Corporate',
		image: '/Events/IMG_8941.jpg',
		tagline: 'The all-hands on deck lunch option.',
		description: 'Boxed lunches for the whole floor, drop-off platters for client meetings, full bars for offsites and holiday parties. Always arrives hot.'
	},
	{
		name: 'Private Parties',
		image: '/Events/3.png',
		tagline: 'For the dinner between close friends.',
		description: 'Birthdays, anniversaries, dinner parties, baby showers — drop-off or full-service, with sides and sauces to round out the spread.'
	}
]

export default EventTypes
