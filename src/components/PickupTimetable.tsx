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
		<table data-timetable className="w-full border-separate border-spacing-x-1.5 border-spacing-y-1.5">
			<thead>
				<tr>
					<th />
					{DAYS.map((day, i) => (
						<th
							data-day
							key={day}
							className={`pb-3 text-center font-inter text-sm font-bold ${i === today ? 'text-[#1a1209]' : 'text-[#8a7d70]'}`}
						>
							{i === today ? 'Today' : day.slice(0, 3)}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{places.map((place) => (
					<tr key={place.name}>
						<td data-place-name className="w-[26%] pr-6 text-left">
							<p className="font-inter text-xl font-black tracking-tight text-[#1a1209]">{place.name}</p>
							<p className="text-sm text-[#8a7d70]">{place.kind}</p>
						</td>
						{DAYS.map((day, i) => {
							const slot = slotFor(place.hours, day)
							const isToday = i === today
							return (
								<td key={day}>
									<div
										data-slot={isToday ? 'today' : ''}
										className={`flex h-14 items-center justify-center rounded-md font-inter text-sm font-extrabold ${
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
	)
}

export default PickupTimetable
