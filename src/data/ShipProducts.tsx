export interface BaseProduct {
	id: string
	squareCatalogId?: string
	name: string
	description: string
	image: string
	price?: number
}

export interface CustomPack extends BaseProduct {
	type: 'custom-pack'
	size: 24 | 36
}

export interface Sauce extends BaseProduct {
	type: 'sauce'
}

export interface PresetBox extends BaseProduct {
	type: 'preset-box'
	contents?: string[]
}

export interface IndividualEmpanada extends BaseProduct {
	type: 'empanada'
	tags: string[]
}

export type ShipProduct = CustomPack | Sauce | PresetBox | IndividualEmpanada

export const CustomPacks: CustomPack[] = [
	{
		id: 'custom-pack-24',
		type: 'custom-pack',
		size: 24,
		name: 'Build a 24-Pack',
		description: 'A 24-pack of empanadas, mix and match as you please.',
		image: '/EmpanadaPics/Items Photos/JAMAICA.jpg'
	},
	{
		id: 'custom-pack-36',
		type: 'custom-pack',
		size: 36,
		name: 'Build a 36-Pack',
		description: 'A 36-pack of empanadas, for those with more mouths to feed.',
		image: '/EmpanadaPics/Items Photos/SINGAPORE.jpg'
	}
]

export const Sauces: Sauce[] = [
	{
		id: 'sauce-chimichurri',
		type: 'sauce',
		name: 'Chimichurri',
		description: 'Bright, herby, garlicky. Made in-house — the green sauce that goes on everything.',
		image: '/EmpanadaPics/EzCaterer Menu/Chimichuri.jpg'
	},
	{
		id: 'sauce-salsa-roja',
		type: 'sauce',
		name: 'Salsa Roja',
		description: 'Smoky, tomato-forward, with a slow warm finish. The red counterpart to chimichurri.',
		image: '/EmpanadaPics/EzCaterer Menu/Salsa Roja.jpg'
	}
]

export const PresetBoxes: PresetBox[] = [
	{
		id: 'preset-world-tour-sampler',
		type: 'preset-box',
		name: 'World Tour Sampler',
		description: 'Twelve empanadas, one of each flavor. The full passport in a single box — the easiest way to taste the whole tour.',
		image: '/EmpanadaPics/EzCaterer Menu/Empanadas by the Dozen.jpg',
		contents: [
			'3 each of all 12 flavors - 36 total',
			'Ships frozen, ready to heat'
		]
	},
	{
		id: 'preset-crowd-pleaser-pack',
		type: 'preset-box',
		name: 'Crowd-Pleaser Pack',
		description: 'Our four top-selling flavors, three of each. Built for picky eaters, big appetites, and anyone who just wants the hits.',
		image: '/EmpanadaPics/EzCaterer Menu/Full Menu.jpg',
		contents: [
			'Buenos Aires, Bordeaux, Jamaica, Philly',
			'9 of each — 36 total',
			'Ships frozen, ready to heat'
		]
	},
	{
		id: 'preset-veggie-tour',
		type: 'preset-box',
		name: 'Veggie Tour',
		description: 'A vegetarian-and-vegan-only spread, three of each of our four meatless flavors. No compromise, all flavor.',
		image: '/EmpanadaPics/Items Photos/CAPRI.jpg',
		contents: [
			'Capri, Louisiana, Mumbai, Singapore',
			'9 of each — 36 total',
			'Vegetarian and Vegan only',
			'Ships frozen, ready to heat'
		]
	}
]

