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
		<div data-place className="grid grid-cols-[6.5rem_1fr] items-start gap-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
			<img data-place-photo src={photo} alt={name} className="h-24 w-26 object-cover sm:h-40 sm:w-52 rounded-lg border border-2 border-black/50" />
			<div>
				<h3 data-place-text className="font-inter text-xl font-black leading-[1.05] sm:text-3xl tracking-tight text-[#1a1209]">
					{name}
				</h3>
				<p data-place-text className="mt-1.5 text-sm text-[#5f5449] sm:mt-2 sm:text-base">{address}</p>
				{notes.map((note) => (
					<p data-place-text key={note} className="mt-1 text-xs font-bold text-[#765600] sm:text-sm">{note}</p>
				))}
				<div data-place-text className="mt-3 flex flex-wrap gap-2 sm:mt-4">
					<a
						href={mapsLink}
						target="_blank"
						rel="noopener noreferrer"
						className="whitespace-nowrap rounded-full bg-[#bf8000] px-4 py-2 font-mono text-[10px] sm:px-5 sm:py-2.5 sm:text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-[#a36d00]"
					>
						Directions
					</a>
					{phoneNumber && (
						<a
							href={`tel:${phoneNumber}`}
							className="whitespace-nowrap rounded-full border border-[#d8cab5] px-4 py-2 font-mono text-[10px] sm:px-5 sm:py-2.5 sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#1a1209] transition-colors duration-200 hover:border-[#bf8000]"
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
