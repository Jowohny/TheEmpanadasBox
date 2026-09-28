import type { ReactNode } from 'react'

export interface BookingTerm {
	label: string
	body: ReactNode
}

const strong = 'font-semibold text-[#1a1209]'

const BookingTerms: BookingTerm[] = [
	{
		label: 'Food & Beverage Minimum',
		body: (
			<>
				Applied to all food spreads, bar packages, and drink tabs. If total food and beverage
				spend falls below the agreed minimum, the difference is billed as an{' '}
				<span className={strong}>Unmet Minimum Room Charge</span>.
			</>
		)
	},
	{
		label: 'Deposit',
		body: (
			<>
				A <span className={strong}>50% non-refundable deposit</span> is required upon booking to
				secure your date and time on our calendar.
			</>
		)
	},
	{
		label: 'Auto-Gratuity',
		body: (
			<>
				A <span className={strong}>20% staff gratuity</span> is automatically applied to all food
				and beverage charges and goes directly to your dedicated bartenders, cooks, and service team.
			</>
		)
	},
	{
		label: 'Administrative & Cleaning Fee',
		body: (
			<>
				A <span className={strong}>3% administrative and cleaning fee</span> is applied to each
				event invoice to cover setup, event production, breakdown, and room turnover.
			</>
		)
	},
	{
		label: 'Event Curfew & Last Call',
		body: (
			<>
				All evening events conclude by <span className={strong}>midnight (12:00 AM)</span>. Per
				venue policy, bar service must end 30 minutes before the event end time, and all guests
				must vacate the space by the contracted conclusion time.
			</>
		)
	},
	{
		label: 'No Straight Shots',
		body: (
			<>
				To ensure guest safety, bar packages do not cover straight shots, and straight shots are
				not permitted during private open-bar packages.
			</>
		)
	},
	{
		label: 'Taxes',
		body: <>Applicable state and local sales taxes are added to final invoices.</>
	}
]

export default BookingTerms
