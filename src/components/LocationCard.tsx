import { useState } from "react";
import type { Location } from "../data/LocationInfo";

type LocationCardProps = {
	location: Location
}

const formatPhoneNumber = (phoneNumber: string) => {
	return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`
};

const LocationCard = ({ location }: LocationCardProps ) => {
	const [changeInteract, setChangeInteract] = useState<"photo" | "map">("photo");

	return (
		<div className="overflow-hidden rounded-[2rem] border border-[#d9cdbf] bg-[#faf7f2] shadow-xl">
		<div className="relative h-[24rem] w-full bg-[#d5c1a2]">
			<div className="absolute right-5 top-5 z-20 inline-flex rounded-full border border-black/10 bg-white/90 p-1 shadow-lg">
				<button
					type="button"
					onClick={() =>
						setChangeInteract('photo')
					}
					className={`rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] ${
						changeInteract === 'photo' ? 'bg-[#1a1209] text-white' : 'text-[#6f6255]'
					}`}
				>
					Storefront
				</button>
				<button
					type="button"
					onClick={() =>
						setChangeInteract('map')
					}
					className={`rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] ${
						changeInteract === 'map' ? 'bg-[#1a1209] text-white' : 'text-[#6f6255]'
					}`}
				>
					Map
				</button>
			</div>

			{changeInteract === 'map' ? (
				<iframe
					src={location.iFrameLink}
					title={`${location.name} map`}
					className="absolute inset-0 z-0 h-full w-full"
					style={{ border: 0 }}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			) : (
				<>
					<img
						src={location.storeFront}
						alt={location.name}
						className="h-full w-full object-cover"
					/>
					<div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black via-[#1a1209]/30 to-transparent" />
					<div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-[#faf7f2]">
						<p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-[#fec32f]">
							Pickup Location
						</p>
						<h2 className="font-inter text-4xl font-black leading-tight" style={{ whiteSpace: "pre-line" }}>
							{location.name}
						</h2>
					</div>
				</>
			)}
		</div>

		<div className="grid gap-3 p-7">
			<div>
				<p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#bf8000]">
					Visit Us
				</p>
				<h3 className="text-2xl font-black tracking-tight text-[#1a1209]">
					{location.name}
				</h3>
				<p className="leading-relaxed text-[#5f5449]">
					{location.address}
				</p>

				<div className="my-6 flex gap-3">
					<a
						href={location.mapsLink}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full bg-[#bf8000] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white"
					>
						Open in Maps
					</a>
					<a
						href={`tel:${location.phoneNumber}`}
						className="rounded-full border border-[#d8cab5] bg-white px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#1a1209]"
					>
						Call {formatPhoneNumber(location.phoneNumber)}
					</a>
				</div>
			</div>

			<div className="rounded-[1.5rem] bg-[#efe7d9] p-6">
				<p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#8f6440]">
					Hours
				</p>
				<div className="gap-3 grid grid-cols-2">
					{location.hours.map((hour) => (
						<div
							key={`${location.name}-${hour}`}
							className="rounded-2xl border border-white/60 bg-white/60 px-4 py-3 text-sm font-black text-[#4f4338] tracking-wide"
						>
							{hour}
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
	)
}

export default LocationCard;