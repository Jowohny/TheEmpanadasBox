import type { IncomingMessage, ServerResponse } from 'node:http';

export type Req = IncomingMessage & { body?: unknown }

const MAX_BODY_BYTES = 10_000;
const BODY_TIMEOUT_MS = 5_000;
export const BODY_TOO_LARGE = 'BODY_TOO_LARGE';

export function send(res: ServerResponse, status: number, payload: unknown) {
	res.statusCode = status;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(payload));
}

export async function readBody(req: Req): Promise<Record<string, unknown>> {
	if (req.body && typeof req.body === 'object') return req.body as Record<string, unknown>;

	if (Number(req.headers['content-length'] ?? 0) > MAX_BODY_BYTES) {
		throw new Error(BODY_TOO_LARGE);
	}

	req.setTimeout(BODY_TIMEOUT_MS, () => req.destroy());

	const chunks: Buffer[] = [];
	let size = 0;
	for await (const chunk of req) {
		size += (chunk as Buffer).length;
		if (size > MAX_BODY_BYTES) throw new Error(BODY_TOO_LARGE);
		chunks.push(chunk as Buffer);
	}

	const raw = Buffer.concat(chunks).toString('utf8');
	return raw ? JSON.parse(raw) : {};
}
