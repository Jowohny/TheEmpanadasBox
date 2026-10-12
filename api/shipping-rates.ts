import type { ServerResponse } from 'node:http';
import { createRateQuote } from './_lib/shippo.js';
import type { DestinationAddress } from './_lib/shippo.js';
import { send, readBody, BODY_TOO_LARGE, type Req } from './_lib/http.js';

/** We ship frozen. Anything slower than this arrives thawed, so it is never quoted. */
const MAX_TRANSIT_DAYS = 2;

const REQUIRED: Array<keyof DestinationAddress> = ['name', 'street1', 'city', 'state', 'zip'];

export default async function handler(req: Req, res: ServerResponse) {
	if (req.method !== 'POST') return send(res, 405, { error: 'Method not allowed' });

	if (!process.env.SHIPPO_API_KEY) {
		return send(res, 500, { error: 'SHIPPO_API_KEY is not configured on the server.' });
	}

	let body: Record<string, unknown>;
	try {
		body = await readBody(req);
	} catch (error) {
		if (error instanceof Error && error.message === BODY_TOO_LARGE) {
			return send(res, 413, { error: 'Request body too large.' });
		}
		return send(res, 400, { error: 'Invalid JSON body.' });
	}

	const address = body.address as DestinationAddress | undefined;
	const itemCount = Number(body.itemCount) || 1;

	const missing = address ? REQUIRED.filter((f) => !String(address[f] ?? '').trim()) : REQUIRED;
	if (missing.length) {
		return send(res, 400, {
			error: `Missing required shipping address fields (${missing.join(', ')}).`,
		});
	}

	try {
		const shipment = await createRateQuote(address as DestinationAddress, itemCount);
		const rawRates = shipment.rates || [];

		const perishableEligibleRates = rawRates
			.filter((rate) => rate.estimated_days != null && rate.estimated_days <= MAX_TRANSIT_DAYS)
			.map((rate) => ({
				rateId: rate.object_id,
				carrier: rate.provider,
				serviceName: rate.servicelevel?.name || rate.servicelevel?.token || '',
				amount: rate.amount,
				amountCents: Math.round(parseFloat(rate.amount) * 100),
				estimatedDays: rate.estimated_days ?? null,
				durationTerms: rate.duration_terms ?? null,
			}))
			.sort((a, b) => a.amountCents - b.amountCents);

		return send(res, 200, {
			success: true,
			shipmentId: shipment.object_id,
			rates: perishableEligibleRates,
		});
	} catch (error) {
		console.error('Error fetching shipping rates:', error);
		const message = error instanceof Error ? error.message : 'Failed to calculate shipping rates.';
		return send(res, 502, { error: message });
	}
}
