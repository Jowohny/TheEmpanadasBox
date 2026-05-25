export interface Location {
	name: string
	address: string
	hours: string[]
	doordashLink: string
	postmatesLink: string
	uberEatsLinks: string
	iFrameLink: string
	mapsLink: string
	phoneNumber: string
	storeFront: string
}

const Locations: Location[] = [
	{
		name: 'Empanada Box\nCovington',
		address: '212 W Pike St, Covington, KY 41011',
		hours: ['Monday: CLOSED', 'Tuesday: 11AM-8PM', 'Wednesday: 11AM-8PM', 'Thursday: 11AM-8PM', 'Friday: 11AM-8PM', 'Saturday: 11AM-8PM', 'Sunday: 11AM-8PM'],
		doordashLink: 'https://www.doordash.com/store/the-empanadas-box-covington-24170096/16918546/?pickup=true&rwg_token=AFd1xnEs_QVgfQDaAbo5IBvmE5OVfAxSJ6pUYUDX1wlQPGXXEHssFZE3WkZ9TF-SoQ0yH1B_wzGMwMDkYbERyVemnMk0FLiH_A==&utm_campaign=gpa',
		postmatesLink: 'https://postmates.com/store/the-empanadas-box/ac5LSmGXQU-Q2PopVVy2Yw?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas',
		uberEatsLinks: 'https://www.ubereats.com/store/the-empanadas-box/ac5LSmGXQU-Q2PopVVy2Yw?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas&rwg_token=AFd1xnEYwiwMtSpWoSqBdSxA37yY6T5lXsruW3I6DqS4afIckoR1yxUHKruJ05pi-5vAXQVYf9OKPep4yzpOD_mGUAyMucffXQ%3D%3D',
		iFrameLink: 'https://maps.google.com/maps?q=212%20W%20Pike%20St%2C%20Covington%2C%20KY%2041011&z=16&output=embed',
		mapsLink: 'https://www.google.com/maps/place/The+Empanada\'s+Box+Covington/@39.0822045,-84.5162375,16z/data=!3m1!4b1!4m6!3m5!1s0x8841b3ed7a988b37:0x948d39bbb6868cf3!8m2!3d39.0822004!4d-84.5136626!16s%2Fg%2F11qn59ht7k?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D',
		phoneNumber: '8592793297',
		storeFront: '/covington.jpg'
	},
	{
		name: 'Empanada Box\nFindlay Market',
		address: '1807 Elm St, Cincinnati, OH 45202',
		hours: ['Monday: CLOSED', 'Tuesday: 11AM-7PM', 'Wednesday: 11AM-7PM', 'Thursday: 11AM-7PM', 'Friday: 11AM-7PM', 'Saturday: 11AM-7PM', 'Sunday: 11AM-5PM'],
		doordashLink: 'https://www.doordash.com/store/the-empanadas-box-cincinnati-33894621/?utm_campaign=gpa&pickup=true&rwg_token=AFd1xnGhSQ8sIzws6EWbRLuSJ5Qc0AiasX9wzL2fl-jPLOEoFZE98NRvFrYor98p2vPHtXz4uqeNL_ja9HzdDK0E6vVsVRywNA%3D%3D',
		postmatesLink: 'https://postmates.com/store/the-empanadas-box-findlay-market-1807-elm-st/C_GHKjfXWcuXk-PRAQS6mg?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas',
		uberEatsLinks: 'https://www.ubereats.com/store/the-empanadas-box-findlay-market-1807-elm-st/C_GHKjfXWcuXk-PRAQS6mg?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas&rwg_token=AFd1xnEf8_Om-3_IfGZ4XV-ZsWgK3OT1SJgUbkNqvHfnyczx-kDPzORWlJfzg1kpHYBh77pfdt6fiUBXuHJH4pM9bBcUS1F0uA%3D%3D',
		iFrameLink: 'https://maps.google.com/maps?q=1807%20Elm%20St%2C%20Cincinnati%2C%20OH%2045202&z=16&output=embed',
		mapsLink: 'https://www.google.com/maps/place/The+Empanada\'s+Box+Findlay+Market/@39.1153709,-84.5227355,17z/data=!3m1!4b1!4m6!3m5!1s0x8841b300620e01f7:0xfdd35bd48b4c42fd!8m2!3d39.1153668!4d-84.5201606!16s%2Fg%2F11x8dfy_jb?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D',
		phoneNumber: '8592793297',
		storeFront: '/findlay.png'
	}
]

export default Locations