export interface EventType {
	name: string
	image: string
	tagline: string
	description: string
}

const EventTypes: EventType[] = [
	{
		name: 'Weddings',
		image: '/EmpanadaPics/EzCaterer Menu/Empanadas by the Dozen.jpg',
		tagline: 'For that once in a lifetime moment.',
		description: 'Dedicated bar and staff during cocktail hour, varieties of empanadas to savor throughout the night, and plenty of space to plan what is needed.'
	},
	{
		name: 'Corporate',
		image: '/EmpanadaPics/EzCaterer Menu/Office Empanada Box - 20 Ppl.jpg',
		tagline: 'The all-hands on deck lunch option.',
		description: 'Boxed lunches for the whole floor, drop-off platters for client meetings, full bars for offsites and holiday parties. Always arrives hot.'
	},
	{
		name: 'Private Parties',
		image: '/EmpanadaPics/EzCaterer Menu/Team Meeting Pack - 10 Ppl.jpg',
		tagline: 'For the dinner between close friends.',
		description: 'Birthdays, anniversaries, dinner parties, baby showers — drop-off or full-service, with sides and sauces to round out the spread.'
	}
]

export default EventTypes
