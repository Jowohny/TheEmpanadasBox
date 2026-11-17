type TimetablePlace = {
	name: string
	kind: string
	address: string
	mapsLink: string
	photo: string
	hours: string[]
	phoneNumber?: string
	notes?: string[]
	market?: boolean
}

type PickupTimetableProps = {
	places: TimetablePlace[]
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const slotFor = (hours: string[], day: string) => {
	const entry = hours.find(h => h.startsWith(`${day}:`))
	if (!entry) return null
	const value = entry.slice(day.length + 1).trim()
	return /closed/i.test(value) ? null : value.replace('-', '–')
}

const formatPhoneNumber = (phoneNumber: string) =>
	phoneNumber.length === 10 ? `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}` : phoneNumber

// Address, phone and seasonal notes, shared by the phone list and the table
const PlaceDetails = ({ place }: { place: TimetablePlace }) => (
	<>
		<a href={place.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-1 block text-xs text-[#5f5449] underline decoration-[#d8cab5] underline-offset-2 hover:decoration-[#bf8000] lg:text-sm">
			{place.address}
		</a>
		{place.phoneNumber && (
			<a href={`tel:${place.phoneNumber}`} className="mt-0.5 block text-xs font-semibold text-[#1a1209] hover:text-[#bf8000] lg:text-sm">
				{formatPhoneNumber(place.phoneNumber)}
			</a>
		)}
		{place.notes?.map((note) => (
			<p key={note} className="mt-0.5 text-xs font-bold text-[#765600]">{note}</p>
		))}
	</>
)

const PickupTimetable = ({ places }: PickupTimetableProps) => {
	const today = (new Date().getDay() + 6) % 7

	return (
		<>
			<ul data-timetable-mobile className="md:hidden">
				{places.map((place) => {
					const todaySlot = slotFor(place.hours, DAYS[today])
					return (
						<li data-mobile-place key={place.name} className="border-t border-[#1a1209]/10 py-5 first:border-t-0">
							<div className="flex items-start gap-3">
								<img src={place.photo} alt={place.name} className="h-16 w-16 shrink-0 rounded-md object-cover" />
								<div className="min-w-0 flex-1">
									<p className="font-inter text-lg font-black leading-tight tracking-tight text-[#1a1209]">{place.name}</p>
									<p className="text-xs text-[#8a7d70]">{place.kind}</p>
								</div>
								<p
									data-mobile-today
									className={`shrink-0 rounded-md px-3 py-2 text-right font-inter text-sm font-extrabold ${todaySlot ? 'bg-[#fec32f] text-[#1a1209]' : 'text-[#a99b8c]'}`}
								>
									{todaySlot ?? 'Closed today'}
								</p>
							</div>
							<div className="mt-3 pl-[4.75rem]">
								<PlaceDetails place={place} />
								<div className="mt-3 flex gap-1.5">
									{DAYS.map((day, i) => (
										<span
											key={day}
											className={`flex h-6 w-6 items-center justify-center rounded text-[11px] font-bold ${
												i === today ? 'bg-[#1a1209] text-[#fec32f]'
												: slotFor(place.hours, day) ? (place.market ? 'bg-[#e3ecdf] text-[#3d5a3f]' : 'bg-[#efe6d6] text-[#4f4338]')
												: 'text-[#cbbfb1]'
											}`}
										>
											{day[0]}
										</span>
									))}
								</div>
							</div>
						</li>
					)
				})}
			</ul>

			<table data-timetable className="hidden w-full border-separate border-spacing-x-1 border-spacing-y-1 md:table lg:border-spacing-x-1.5 lg:border-spacing-y-1.5">
				<thead>
					<tr>
						<th />
						{DAYS.map((day, i) => (
							<th
								data-day
								key={day}
								className={`pb-3 text-center font-inter text-xs font-bold lg:text-sm ${i === today ? 'text-[#1a1209]' : 'text-[#8a7d70]'}`}
							>
								{i === today ? 'Today' : day.slice(0, 3)}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{places.map((place) => (
						<tr key={place.name}>
							<td data-place-name className="w-[34%] py-2 pr-3 text-left lg:w-[32%] lg:pr-6">
								<div className="flex items-start gap-3 lg:gap-4">
									<img src={place.photo} alt={place.name} className="h-16 w-16 shrink-0 rounded-md object-cover lg:h-24 lg:w-28" />
									<div className="min-w-0">
										<p className="font-inter text-base font-black leading-tight tracking-tight text-[#1a1209] lg:text-xl">{place.name}</p>
										<p className="text-xs text-[#8a7d70] lg:text-sm">{place.kind}</p>
										<PlaceDetails place={place} />
									</div>
								</div>
							</td>
							{DAYS.map((day, i) => {
								const slot = slotFor(place.hours, day)
								const isToday = i === today
								return (
									<td key={day}>
										<div
											data-slot={isToday ? 'today' : ''}
											className={`flex h-12 items-center justify-center rounded-md px-1 text-center font-inter text-[11px] font-extrabold leading-tight lg:h-14 lg:text-sm ${
												!slot ? 'text-[#cbbfb1]'
												: isToday ? 'bg-[#fec32f] text-[#1a1209]'
												: place.market ? 'bg-[#e3ecdf] text-[#3d5a3f]'
												: 'bg-[#efe6d6] text-[#4f4338]'
											}`}
										>
											{slot ?? 'Closed'}
										</div>
									</td>
								)
							})}
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default PickupTimetable
