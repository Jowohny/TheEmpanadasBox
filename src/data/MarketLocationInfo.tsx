export interface MarketLocation {
	name: string
	address: string
	duration: string
	hours: string[]
	iFrameLink: string
	mapsLink: string
	phoneNumber: string
	storeFront: string

}

const MarketLocations: MarketLocation[] = [
	{
		name: 'The Empanadas Box\nFort Thomas Farmers Market',
		address: '801 Cochran Ave, Fort Thomas, KY 41075',
		duration: 'OPEN FROM APRIL 9 - DECEMBER 17\nFROZEN EMPANADAS ONLY ❄️🥟❄️',
		hours: ['Wednesday: 3PM-6PM', 'Hours extend to 7:00PM from June through September'],
		iFrameLink: 'https://maps.google.com/maps?q=801%20Cochran%20Ave%2C%20Fort%20Thomas%2C%20KY%2041075&z=16&output=embed',
		mapsLink: 'https://maps.app.goo.gl/PZr5MAtS6nZ73n5n9',
		phoneNumber: '8592793297',
		storeFront: '/fortmarket.png'
	},
	{
		name: 'The Empanadas Box\nFindlay\'s Farmers Market',
		address: '1801 Race Street Cincinnati, OH 45202',
		duration: 'OPEN FROM APRIL 9 - DECEMBER 17\nFROZEN EMPANADAS ONLY ❄️🥟❄️',
		hours: ['Saturday: 8AM-2PM', 'Sunday: 10AM-2PM'],
		iFrameLink: 'https://maps.google.com/maps?q=1801%20Race%20Street%20Cincinnati%2C%20OH%2045202&z=16&output=embed',
		mapsLink: 'https://maps.app.goo.gl/rQnzzHozjFwdN8jr7',
		phoneNumber: '8592793297',
		storeFront: '/findlaymarket.png'
	}
]

export default MarketLocations