import Empanadas from "./Empanadas";

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
	size: 8 | 12
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
		id: 'custom-pack-8',
		type: 'custom-pack',
		size: 8,
		name: 'Build an 8-Pack',
		description: 'An eight-pack of empanadas, mix and match.',
		image: '/EmpanadaPics/Items Photos/JAMAICA.jpg'
	},
	{
		id: 'custom-pack-12',
		type: 'custom-pack',
		size: 12,
		name: 'Build a 12-Pack',
		description: 'The full passport - twelve empanadas, your call.',
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

export const EmpanadaProducts: IndividualEmpanada[] = Empanadas.map((e) => ({
	id: `empanada-${e.name.toLowerCase().replace(/\s+/g, '-')}`,
	type: 'empanada',
	name: e.name,
	description: e.description,
	image: e.image,
	tags: e.tags
}))

export const PresetBoxes: PresetBox[] = []
