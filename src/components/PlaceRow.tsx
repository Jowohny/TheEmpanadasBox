type PlaceRowProps = {
	name: string
	address: string
	photo: string
	mapsLink: string
	phoneNumber?: string
	notes?: string[]
}

const formatPhoneNumber = (phoneNumber: string) => {
	if (phoneNumber.length !== 10) return phoneNumber;

	return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
};

const PlaceRow = ({ name, address, photo, mapsLink, phoneNumber, notes = [] }: PlaceRowProps) => {
	return (
		<div data-place className="grid grid-cols-[13rem_1fr] items-start gap-6">
			<img data-place-photo src={photo} alt={name} className="h-40 w-52 object-cover rounded-lg border border-2 border-black/50" />
			<div>
				<h3 data-place-text className="font-inter text-3xl font-black leading-[1.05] tracking-tight text-[#1a1209]">
					{name}
				</h3>
				<p data-place-text className="mt-2 text-base text-[#5f5449]">{address}</p>
				{notes.map((note) => (
					<p data-place-text key={note} className="mt-1 text-sm font-bold text-[#765600]">{note}</p>
				))}
				<div data-place-text className="mt-4 flex flex-wrap gap-2">
					<a
						href={mapsLink}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full bg-[#bf8000] px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-[#a36d00]"
					>
						Directions
					</a>
					{phoneNumber && (
						<a
							href={`tel:${phoneNumber}`}
							className="rounded-full border border-[#d8cab5] px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#1a1209] transition-colors duration-200 hover:border-[#bf8000]"
						>
							Call {formatPhoneNumber(phoneNumber)}
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default PlaceRow
