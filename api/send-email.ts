import type { ServerResponse } from 'node:http';
import { sendContactMessage, isInbox, INBOX_KEYS } from './_lib/resend.js';
import { send, readBody, BODY_TOO_LARGE, type Req } from './_lib/http.js';

const LIMITS = { name: 120, email: 200, phone: 40, topic: 60, message: 5000 };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const str = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

export default async function handler(req: Req, res: ServerResponse) {
	if (req.method !== 'POST') return send(res, 405, { error: 'Method not allowed' });

	if (!process.env.RESEND_API_KEY) {
		return send(res, 500, { error: 'RESEND_API_KEY is not configured on the server.' });
	}

	let body: Record<string, unknown>;
	try {
		body = await readBody(req);
	} catch (error) {
		if (error instanceof Error && error.message === BODY_TOO_LARGE) {
			return send(res, 413, { error: 'Message too long.' });
		}
		return send(res, 400, { error: 'Invalid JSON body.' });
	}

	const name = str(body.name);
	const email = str(body.email);
	const phone = str(body.phone);
	const topic = str(body.topic);
	const message = str(body.message);

	const missing = [
		!name && 'name',
		!email && 'email',
		!message && 'message',
	].filter(Boolean);
	if (missing.length) {
		return send(res, 400, { error: `Missing required field(s): ${missing.join(', ')}.` });
	}

	if (!EMAIL_RE.test(email)) {
		return send(res, 400, { error: 'That email address does not look valid.' });
	}

	const tooLong = Object.entries(LIMITS).find(
		([field, max]) => str(body[field]).length > max,
	);
	if (tooLong) {
		return send(res, 400, { error: `${tooLong[0]} is too long (max ${tooLong[1]}).` });
	}

	const inbox = body.inbox === undefined ? 'general' : body.inbox;
	if (!isInbox(inbox)) {
		return send(res, 400, { error: `inbox must be one of: ${INBOX_KEYS.join(', ')}.` });
	}

	try {
		const { id } = await sendContactMessage({ name, email, phone, topic, message, inbox });
		return send(res, 200, { success: true, id });
	} catch (error) {
		console.error('Error sending contact email:', error);
		const detail = error instanceof Error ? error.message : 'Could not send that message.';
		return send(res, 502, { error: detail });
	}
}
