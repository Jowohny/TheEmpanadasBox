const SHIPPO_API_URL = 'https://api.goshippo.com';

export const STORE_ORIGIN_ADDRESS = {
	name: 'Empanada Box Kitchen & Bar',
	street1: '1819 Elm St',
	city: 'Cincinnati',
	state: 'OH',
	zip: '45202',
	country: 'US',
	phone: '5132464200',
};

export const DEFAULT_EMPANADA_PARCEL = {
	length: '12',
	width: '10',
	height: '8',
	distance_unit: 'in',
	mass_unit: 'lb',
};

const BASE_WEIGHT_LB = 2;
const WEIGHT_PER_ITEM_LB = 0.25;
const MAX_ITEMS = 200;

export interface DestinationAddress {
	name: string;
	street1: string;
	street2?: string;
	city: string;
	state: string;
	zip: string;
	country?: string;
}

export interface ShippoRate {
	object_id: string;
	provider: string;
	servicelevel?: { name?: string; token?: string };
	amount: string;
	currency: string;
	estimated_days?: number | null;
	duration_terms?: string | null;
}

export interface ShippoShipment {
	object_id: string;
	rates?: ShippoRate[];
}

export async function shippoFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
	const res = await fetch(`${SHIPPO_API_URL}${endpoint}`, {
		...options,
		headers: {
			Authorization: `ShippoToken ${process.env.SHIPPO_API_KEY}`,
			'Content-Type': 'application/json',
			...options.headers,
		},
	});

	if (!res.ok) {
		const errorBody = (await res.json().catch(() => ({}))) as { message?: string };
		throw new Error(errorBody.message || `Shippo API error: ${res.status}`);
	}

	return res.json() as Promise<T>;
}

export function parcelFor(itemCount: number) {
	const count = Math.min(Math.max(Number(itemCount) || 1, 1), MAX_ITEMS);
	const weight = BASE_WEIGHT_LB + count * WEIGHT_PER_ITEM_LB;
	return { ...DEFAULT_EMPANADA_PARCEL, weight: weight.toFixed(2) };
}

export async function createRateQuote(addressTo: DestinationAddress, itemCount = 1) {
	return shippoFetch<ShippoShipment>('/shipments/', {
		method: 'POST',
		body: JSON.stringify({
			address_from: STORE_ORIGIN_ADDRESS,
			address_to: {
				...addressTo,
				country: addressTo.country || 'US',
			},
			parcels: [parcelFor(itemCount)],
			async: false,
		}),
	});
}

export async function getVerifiedRate(rateId: string) {
	return shippoFetch<ShippoRate>(`/rates/${rateId}`);
}
