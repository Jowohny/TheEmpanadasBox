import { useState, type FormEvent } from 'react';
import { useCart } from '../contexts/CartContext';

interface Rate {
	rateId: string
	carrier: string
	serviceName: string
	amount: string
	amountCents: number
	estimatedDays: number | null
	durationTerms: string | null
}

const BLANK = { name: '', street1: '', street2: '', city: '', state: '', zip: '' };

const inputClass =
	'rounded-xl bg-[#efe7d9] px-4 py-3 font-mono text-sm text-[#1a1209] placeholder:text-[#8a6f45] focus:outline-none focus:ring-2 focus:ring-[#fec32f]';
const labelClass =
	'mb-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]';

const ShippingRate = () => {
	const { itemCount } = useCart();
	const [form, setForm] = useState(BLANK);
	const [rates, setRates] = useState<Rate[] | null>(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const set = (field: keyof typeof BLANK) => (e: React.ChangeEvent<HTMLInputElement>) =>
		setForm((f) => ({ ...f, [field]: e.target.value }));

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError('');
		setRates(null);

		try {
			const res = await fetch('/api/shipping-rates', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ address: form, itemCount }),
			});
			const data = await res.json().catch(() => ({}));

			if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);

			// the endpoint already filters to 2-day transit and sorts cheapest first
			setRates(data.rates ?? []);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Could not fetch shipping rates.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
				<label className="flex flex-col">
					<span className={labelClass}>Full Name</span>
					<input required type="text" value={form.name} onChange={set('name')} placeholder="Jane Doe" className={inputClass} />
				</label>

				<label className="flex flex-col">
					<span className={labelClass}>Street Address</span>
					<input required type="text" value={form.street1} onChange={set('street1')} placeholder="212 W Pike St" className={inputClass} />
				</label>

				<label className="flex flex-col">
					<span className={labelClass}>Apt / Suite (optional)</span>
					<input type="text" value={form.street2} onChange={set('street2')} placeholder="Apt 4B" className={inputClass} />
				</label>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-[2fr_1fr_1fr] md:gap-5">
					<label className="flex flex-col">
						<span className={labelClass}>City</span>
						<input required type="text" value={form.city} onChange={set('city')} placeholder="Covington" className={inputClass} />
					</label>
					<label className="flex flex-col">
						<span className={labelClass}>State</span>
						<input required type="text" maxLength={2} value={form.state} onChange={set('state')} placeholder="KY" className={`${inputClass} uppercase`} />
					</label>
					<label className="flex flex-col">
						<span className={labelClass}>ZIP</span>
						<input required type="text" inputMode="numeric" value={form.zip} onChange={set('zip')} placeholder="41011" className={inputClass} />
					</label>
				</div>

				<button
					type="submit"
					disabled={loading}
					className="mt-2 self-start rounded-full border-2 border-black/20 bg-[#bf8000] px-7 py-3 font-mono text-xs font-black uppercase tracking-[0.18em] text-white shadow-md disabled:opacity-50 md:px-8 md:py-4"
				>
					{loading ? 'Calculating…' : 'Calculate Shipping →'}
				</button>
			</form>

			{error && (
				<p className="mt-6 border-t border-[#a33522]/30 pt-4 font-mono text-xs leading-relaxed text-[#a33522]">
					{error}
				</p>
			)}

			{rates && rates.length === 0 && (
				<p className="mt-6 border-t border-[#1a1209]/10 pt-4 text-sm font-light text-[#64605b]">
					No carrier can get frozen empanadas to that address within 2 days, so we can&rsquo;t
					ship there yet. Double-check the ZIP, or reach out and we&rsquo;ll see what we can do.
				</p>
			)}

			{rates && rates.length > 0 && (
				<div className="mt-10">
					<p className={labelClass}>
						Available Rates — {itemCount || 1} item{(itemCount || 1) === 1 ? '' : 's'}
					</p>
					<div className="mt-3 flex flex-col">
						{rates.map((rate) => (
							<div
								key={rate.rateId}
								className="flex items-baseline justify-between gap-6 border-t border-[#1a1209]/10 py-4"
							>
								<div>
									<p className="font-inter text-base font-black tracking-tight text-[#1a1209] md:text-lg">
										{rate.carrier} {rate.serviceName}
									</p>
									<p className="mt-1 text-xs font-light text-[#64605b]">
										{rate.estimatedDays
											? `Est. ${rate.estimatedDays} day${rate.estimatedDays === 1 ? '' : 's'}`
											: rate.durationTerms || 'Delivery estimate unavailable'}
									</p>
								</div>
								<p className="shrink-0 font-inter text-xl font-black text-[#1a1209] md:text-2xl">
									${rate.amount}
								</p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ShippingRate;
