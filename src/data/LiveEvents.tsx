export interface LiveEvent {
	title: string
	// SimpleTix event page; it carries its own date, price and Register button.
	embedUrl: string
}

const LiveEvents: LiveEvent[] = [
	{
		title: 'Sip & Fold: Empanada Making Night',
		embedUrl: 'https://www.simpletix.com/e/sip-fold-empanada-making-night-tickets-300756',
	},
	{
		title: 'Empanada & Wine Tasting',
		embedUrl: 'https://www.simpletix.com/e/an-argentine-christmas-empanada-wine-tasti-tickets-300818',
	},
]

export default LiveEvents
