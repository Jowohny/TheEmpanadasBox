// api/order-totals.ts
//
// POST { items: [{ id, quantity }] } -> { lines, subtotalCents, unknownIds }
//
// Re-prices the cart from the server's catalog so the browser's numbers are never
// trusted. No order is created and nothing is charged.
import type { ServerResponse } from 'node:http';
import { verifyCart } from './_lib/catalog.js';
import type { CartItemInput } from './_lib/catalog.js';
import { send, readBody, BODY_TOO_LARGE, type Req } from './_lib/http.js';

export default async function handler(req: Req, res: ServerResponse) {
	if (req.method !== 'POST') return send(res, 405, { error: 'Method not allowed' });

	let body: Record<string, unknown>;
	try {
		body = await readBody(req);
	} catch (error) {
		if (error instanceof Error && error.message === BODY_TOO_LARGE) {
			return send(res, 413, { error: 'Request body too large.' });
		}
		return send(res, 400, { error: 'Invalid JSON body.' });
	}

	const raw = Array.isArray(body.items) ? body.items : null;
	if (!raw || raw.length === 0) {
		return send(res, 400, { error: 'An items array is required.' });
	}

	const items: CartItemInput[] = raw
		.map((entry) => entry as { id?: unknown; quantity?: unknown })
		.filter((entry) => typeof entry.id === 'string')
		.map((entry) => ({ id: entry.id as string, quantity: Number(entry.quantity) || 1 }));

	const verified = verifyCart(items);
	if (verified.lines.length === 0) {
		return send(res, 400, { error: 'None of these items could be priced.' });
	}

	return send(res, 200, { success: true, ...verified });
}
