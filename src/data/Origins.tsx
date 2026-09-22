export interface Milestone {
	marker: string
	title: string
	body: string
}

export const Milestones: Milestone[] = [
	{
		marker: 'August 12, 2020',
		title: 'The First Pop-Up Tent',
		body:
			'We launched our very first pop-up tent outside Findlay Market, prepping and perfecting our ' +
			'dough and fillings out of Findlay Kitchen during the pandemic.',
	},
	{
		marker: 'June 10, 2022',
		title: 'Accelerator Graduates',
		body:
			'We were selected for and graduated from the prestigious Findlay Launch Storefront Accelerator ' +
			'Program, establishing our footprint on Elm Street.',
	},
	{
		marker: 'June 22, 2022',
		title: 'Across the River to Covington',
		body:
			'With incredible support from local neighbors and food lovers across the river, we opened our ' +
			'storefront in Covington, KY.',
	},
	{
		marker: 'March 25, 2025',
		title: 'A Permanent Home',
		body:
			'After graduating from the program, we moved into our permanent brick & mortar storefront at 1807 Elm St.',
	},
	{
		marker: 'September 4, 2026',
		title: 'Business Expansion',
		body:
			'To give our community a true gathering space, we moved down the block into a much larger space ' +
			'at 1819 Elm St, complete with a full-service bar, craft drinks, and plenty of dining room seating.',
	},
]
