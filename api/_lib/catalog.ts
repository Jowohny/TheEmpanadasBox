export interface CatalogEntry {
	name: string
	cents: number
}

export const CATALOG: Record<string, CatalogEntry> = {
	'custom-pack-24': { name: 'Build a 24-Pack', cents: 12500 },
	'custom-pack-36': { name: 'Build a 36-Pack', cents: 17500 },
	'sauce-chimichurri': { name: 'Chimichurri', cents: 1200 },
	'sauce-salsa-roja': { name: 'Salsa Roja', cents: 825 },
	'preset-world-tour-sampler': { name: 'World Tour Sampler', cents: 17500 },
	'preset-crowd-pleaser-pack': { name: 'Crowd-Pleaser Pack', cents: 17500 },
	'preset-veggie-tour': { name: 'Veggie Tour', cents: 17500 },
};

export interface CartItemInput {
	id: string
	quantity: number
}

export interface VerifiedLine {
	id: string
	name: string
	quantity: number
	unitCents: number
	totalCents: number
}

export interface VerifiedCart {
	lines: VerifiedLine[]
	subtotalCents: number
	unknownIds: string[]
}

export function verifyCart(items: CartItemInput[]): VerifiedCart {
	const lines: VerifiedLine[] = [];
	const unknownIds: string[] = [];

	for (const item of items) {
		const entry = CATALOG[item.id];
		if (!entry) {
			unknownIds.push(item.id);
			continue;
		}
		const quantity = Math.max(1, Math.min(Math.round(Number(item.quantity) || 1), 99));
		lines.push({
			id: item.id,
			name: entry.name,
			quantity,
			unitCents: entry.cents,
			totalCents: entry.cents * quantity,
		});
	}

	return {
		lines,
		subtotalCents: lines.reduce((sum, line) => sum + line.totalCents, 0),
		unknownIds,
	};
}
