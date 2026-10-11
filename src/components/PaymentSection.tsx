import { useState } from 'react';
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';

type PaymentSectionProps = {
	amountCents: number
	disabled?: boolean
}

const APPLICATION_ID = import.meta.env.VITE_SQUARE_APPLICATION_ID as string | undefined;
const LOCATION_ID = import.meta.env.VITE_SQUARE_LOCATION_ID as string | undefined;

const PaymentSection = ({ amountCents, disabled }: PaymentSectionProps) => {
	const [token, setToken] = useState<string | null>(null);
	const [error, setError] = useState('');

	if (!APPLICATION_ID || !LOCATION_ID) {
		return (
			<div>
				<p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-[#a33522]">
					Card form not configured
				</p>
				<p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-[#64605b]">
					Shipments curently not available.
				</p>
			</div>
		);
	}

	return (
		<div>
			<PaymentForm
				applicationId={APPLICATION_ID}
				locationId={LOCATION_ID}
				cardTokenizeResponseReceived={(result) => {
					if (result.status === 'OK') {
						setError('');
						setToken(result.token ?? null);
						return;
					}
					setToken(null);
					const message = 'errors' in result ? result.errors?.[0]?.message : undefined;
					setError(message ?? 'Could not read that card.');
				}}
			>
				<CreditCard
					buttonProps={{
						isLoading: disabled,
						css: {
							backgroundColor: '#bf8000',
							fontFamily: 'ui-monospace, monospace',
							fontSize: '13px',
							fontWeight: 800,
							letterSpacing: '0.18em',
							textTransform: 'uppercase',
							borderRadius: '9999px',
							'&:hover': { backgroundColor: '#a36d00' },
						},
					}}
				>
					{`Pay $${(amountCents / 100).toFixed(2)}`}
				</CreditCard>
			</PaymentForm>

			{error && (
				<p className="mt-4 font-mono text-xs leading-relaxed text-[#a33522]">{error}</p>
			)}

			{token && (
				<div className="mt-6 border-t border-[#1a1209]/10 pt-4">
					<p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">
						Card tokenized
					</p>
					<p className="mt-2 break-all font-mono text-xs text-[#64605b]">{token}</p>
					<p className="mt-3 text-sm font-light leading-relaxed text-[#64605b]">
						Nothing has been charged. This token is what a future{' '}
						<code className="font-mono text-[#1a1209]">/api/orders</code> endpoint would send to
						Square alongside the verified shipping rate.
					</p>
				</div>
			)}
		</div>
	);
};

export default PaymentSection;
