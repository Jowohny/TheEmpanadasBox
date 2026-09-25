import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CONTACT_EMAIL = 'general@theempanadasbox.com';


const fieldClass =
	'border-0 border-b-2 border-[#1a1209]/15 bg-transparent px-0 py-1 font-inter text-lg text-[#1a1209] ' +
	'placeholder:text-[#b3ab9e] focus:border-[#bf8000] focus:outline-none focus:ring-0';

const labelClass =
	'mb-1 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]';

const ContactUs = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [topic, setTopic] = useState('General');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	return (
		<div className="min-h-screen bg-[#faf7f2]">
			<div className="mx-auto max-w-5xl px-16 py-24">
				<div className="max-w-3xl">
					<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
						Get in touch
					</p>
					<h1 className="mb-4 font-inter text-7xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
						Contact <span className="italic text-[#D09501]">us.</span>
					</h1>
					<div className="mb-5 h-[2px] w-12 bg-[#bf8000]" />
					<p className="text-xl font-light tracking-wide text-[#64605b]">
						Questions, catering, wholesale, or just saying hello — send us a note and we'll get back to you.
					</p>
				</div>

				<form className="mt-16 flex flex-col gap-10">
					<div className="grid grid-cols-2 gap-x-10 gap-y-10">
						<label className="flex flex-col">
							<span className={labelClass}>Name</span>
							<input type="text" required value={name} onChange={(e) => setName(e.target.value)} className={fieldClass} />
						</label>
						<label className="flex flex-col">
							<span className={labelClass}>Email</span>
							<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={fieldClass} />
						</label>
						<label className="flex flex-col">
							<span className={labelClass}>Phone <span className="text-[#bf8000]/50">(optional)</span></span>
							<input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={fieldClass} />
						</label>
						<label className="flex flex-col">
							<span className={labelClass}>Topic</span>
							<select value={topic} onChange={(e) => setTopic(e.target.value)} className={`${fieldClass} cursor-pointer`}>
								<option>General</option>
								<option>Catering</option>
								<option>Wholesale</option>
								<option>Orders &amp; Pickup</option>
								<option>Shipping</option>
								<option>Feedback</option>
								<option>Other</option>
							</select>
						</label>
					</div>

					<label className="flex flex-col">
						<span className={labelClass}>Message</span>
						<textarea
							rows={5}
							required
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="How can we help?"
							className={`${fieldClass} resize-none leading-relaxed`}
						/>
					</label>

					<div className="flex items-center gap-8">
						<button
							type="submit"
							className="self-start rounded-full bg-[#bf8000] px-10 py-4 font-mono text-sm font-semibold uppercase tracking-wide text-white shadow-lg border-2 border-black/20 disabled:opacity-60"
						>
							Send -&gt;
						</button>

					</div>
				</form>

				<div className="mt-16 grid grid-cols-2 border-t border-[#1a1209]/10 pt-8">
					<div>
						<p className="mb-1 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">Prefer email?</p>
						<a href={`mailto:${CONTACT_EMAIL}`} className="font-inter text-lg font-bold text-[#1a1209] underline underline-offset-4 decoration-[#bf8000]">
							{CONTACT_EMAIL}
						</a>
					</div>

					<div>
						<p className="mb-1 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">Events or Quotes?</p>
						<p className="font-inter text-lg font-light text-[#64605b]">
							For any large parties or events you might want to rent out a space for, refer to this 
							&nbsp;<span onClick={() => navigate('/events#inquiry')} className='text-[#bf8000] underline cursor-pointer'>form</span> instead.
						</p>
					</div>

					<div>
						<p className="mb-1 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">Response time</p>
						<p className="font-inter text-lg font-light text-[#64605b]">Within one business day.</p>
					</div>
				</div>

			</div>
		</div>
	);
};

export default ContactUs;
