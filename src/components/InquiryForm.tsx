import { useState, type FormEvent } from 'react';

const INQUIRY_EMAIL = 'theempanadasbox1@gmail.com';

const InquiryForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [eventDate, setEventDate] = useState('');
	const [headcount, setHeadcount] = useState('');
	const [eventType, setEventType] = useState('Corporate');
	const [notes, setNotes] = useState('');

	const handleInquiry = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const subject = encodeURIComponent(`Event Inquiry — ${eventType}`);
		const body = encodeURIComponent(
			`Name: ${name}\n` +
			`Email: ${email}\n` +
			`Phone: ${phone || '(not provided)'}\n` +
			`Event Date: ${eventDate}\n` +
			`Headcount: ${headcount}\n` +
			`Event Type: ${eventType}\n\n` +
			`Notes:\n${notes || '(none)'}`
		);
		window.location.href = `mailto:${INQUIRY_EMAIL}?subject=${subject}&body=${body}`;
	};

	return (
		<form onSubmit={handleInquiry} className="col-span-3 flex flex-col gap-5">
			<div className="grid grid-cols-2 gap-5">
				<label className="flex flex-col">
					<span className="mb-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">Name</span>
					<input
						type="text"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="rounded-xl bg-[#efe7d9] px-4 py-3 font-mono text-sm text-[#1a1209] placeholder:text-[#8a6f45] focus:outline-none focus:ring-2 focus:ring-[#fec32f]"
					/>
				</label>
				<label className="flex flex-col">
					<span className="mb-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">Email</span>
					<input
						type="email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="rounded-xl bg-[#efe7d9] px-4 py-3 font-mono text-sm text-[#1a1209] placeholder:text-[#8a6f45] focus:outline-none focus:ring-2 focus:ring-[#fec32f]"
					/>
				</label>
			</div>

			<div className="grid grid-cols-2 gap-5">
				<label className="flex flex-col">
					<span className="mb-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">Phone</span>
					<input
						type="tel"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						className="rounded-xl bg-[#efe7d9] px-4 py-3 font-mono text-sm text-[#1a1209] placeholder:text-[#8a6f45] focus:outline-none focus:ring-2 focus:ring-[#fec32f]"
					/>
				</label>
				<label className="flex flex-col">
					<span className="mb-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">Event Date</span>
					<input
						type="date"
						required
						value={eventDate}
						onChange={(e) => setEventDate(e.target.value)}
						className="rounded-xl bg-[#efe7d9] px-4 py-3 font-mono text-sm text-[#1a1209] focus:outline-none focus:ring-2 focus:ring-[#fec32f]"
					/>
				</label>
			</div>

			<div className="grid grid-cols-2 gap-5">
				<label className="flex flex-col">
					<span className="mb-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">Headcount</span>
					<input
						type="number"
						min={1}
						required
						value={headcount}
						onChange={(e) => setHeadcount(e.target.value)}
						className="rounded-xl bg-[#efe7d9] px-4 py-3 font-mono text-sm text-[#1a1209] placeholder:text-[#8a6f45] focus:outline-none focus:ring-2 focus:ring-[#fec32f]"
					/>
				</label>
				<label className="flex flex-col">
					<span className="mb-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">Event Type</span>
					<select
						value={eventType}
						onChange={(e) => setEventType(e.target.value)}
						className="rounded-xl bg-[#efe7d9] px-4 py-3 font-mono text-sm text-[#1a1209] focus:outline-none focus:ring-2 focus:ring-[#fec32f]"
					>
						<option>Corporate</option>
						<option>Party</option>
						<option>Other</option>
					</select>
				</label>
			</div>

			<label className="flex flex-col">
				<span className="mb-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">Notes</span>
				<textarea
					rows={5}
					value={notes}
					onChange={(e) => setNotes(e.target.value)}
					placeholder="Tell us about the vibe, the venue, and anything else we should know."
					className="rounded-xl bg-[#efe7d9] px-4 py-3 font-mono text-sm leading-relaxed text-[#1a1209] placeholder:text-[#8a6f45] focus:outline-none focus:ring-2 focus:ring-[#fec32f]"
				/>
			</label>

			<button
				type="submit"
				className="mt-2 self-start rounded-full bg-[#bf8000] px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wide text-white shadow-lg border-2 border-black/20"
			>
				Send Inquiry →
			</button>
		</form>
	)
}

export default InquiryForm