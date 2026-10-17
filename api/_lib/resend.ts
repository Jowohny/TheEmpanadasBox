import { Resend } from 'resend';

let client: Resend | null = null;

function resendClient(): Resend {
	if (client) return client;
	const key = process.env.RESEND_API_KEY;
	if (!key) throw new Error('RESEND_API_KEY is not configured on the server.');
	client = new Resend(key);
	return client;
}

export type Inbox = 'general' | 'events';

const INBOXES: Record<Inbox, string> = {
	general: 'general@theempanadasbox.com',
	events: 'events@theempanadasbox.com',
};

export const INBOX_KEYS = Object.keys(INBOXES) as Inbox[];

export const isInbox = (value: unknown): value is Inbox =>
	typeof value === 'string' && Object.hasOwn(INBOXES, value);

const FROM = 'The Empanada’s Box <noreply@empanadasbox.com>';

function escapeHtml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

export interface ContactMessage {
	inbox?: Inbox
	name: string
	email: string
	phone?: string
	topic?: string
	message: string
}

export async function sendContactMessage(msg: ContactMessage): Promise<{ id: string }> {
	const topic = msg.topic?.trim() || 'General';
	const rows: Array<[string, string]> = [
		['Name', msg.name],
		['Email', msg.email],
		['Phone', msg.phone?.trim() || '(not provided)'],
		['Topic', topic],
	];

	const text = [
		...rows.map(([label, value]) => `${label}: ${value}`),
		'',
		'Message:',
		msg.message,
	].join('\n');

	const html = [
		'<div style="font-family:system-ui,sans-serif;line-height:1.5">',
		...rows.map(
			([label, value]) =>
				`<p style="margin:0 0 4px"><strong>${label}:</strong> ${escapeHtml(value)}</p>`,
		),
		'<hr style="border:none;border-top:1px solid #ddd;margin:16px 0">',
		`<p style="white-space:pre-wrap;margin:0">${escapeHtml(msg.message)}</p>`,
		'</div>',
	].join('');

	const { data, error } = await resendClient().emails.send({
		from: FROM,
		to: INBOXES[msg.inbox ?? 'general'],
		subject: `${topic} enquiry from ${msg.name}`,
		replyTo: msg.email,
		text,
		html,
	});

	if (error) throw new Error(error.message || 'Resend rejected the message.');
	if (!data?.id) throw new Error('Resend did not return a message id.');

	return { id: data.id };
}
