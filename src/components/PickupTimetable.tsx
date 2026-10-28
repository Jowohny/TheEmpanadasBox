type TimetablePlace = {
	name: string
	kind: string
	hours: string[]
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

const PickupTimetable = ({ places }: PickupTimetableProps) => {
	const today = (new Date().getDay() + 6) % 7

	return (
		<>
			<ul data-timetable-mobile className="md:hidden">
				{places.map((place) => {
					const todaySlot = slotFor(place.hours, DAYS[today])
					return (
						<li data-mobile-place key={place.name} className="flex items-start justify-between gap-4 border-t border-[#1a1209]/10 py-4 first:border-t-0">
							<div>
								<p className="font-inter text-lg font-black tracking-tight text-[#1a1209]">{place.name}</p>
								<p className="text-xs text-[#8a7d70]">{place.kind}</p>
								<div className="mt-2 flex gap-1.5">
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
							<p
								data-mobile-today
								className={`shrink-0 rounded-md px-3 py-2 text-right font-inter text-sm font-extrabold ${todaySlot ? 'bg-[#fec32f] text-[#1a1209]' : 'text-[#a99b8c]'}`}
							>
								{todaySlot ?? 'Closed today'}
							</p>
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
							<td data-place-name className="w-[22%] pr-3 text-left lg:w-[26%] lg:pr-6">
								<p className="font-inter text-base font-black tracking-tight text-[#1a1209] lg:text-xl">{place.name}</p>
								<p className="text-xs text-[#8a7d70] lg:text-sm">{place.kind}</p>
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
