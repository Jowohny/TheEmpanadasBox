import EventTypeCard from "../components/EventTypeCard";
import SpaceCard from "../components/SpaceCard";
import EventTypes from "../data/EventTypes";
import EventSpaces from "../data/EventSpaces";

const Events = () => {
	const scrollToId = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<div className="min-w-screen min-h-screen -mt-[8.25rem]">
			<div className="relative flex items-center justify-end overflow-hidden">
				<img
					src="/EmpanadaPics/EzCaterer Menu/Empanada Party Pack - 50 Ppl.jpg"
					className="z-0 object-cover"
					style={{ width: '100vw', height: 'calc(100vh + 2.25rem)' }}
				/>
				<div className="absolute inset-0 bg-gradient-to-l from-white via-white/75 to-transparent z-10" />

				<div className="absolute z-20 mr-16 max-w-2xl text-right">
					<p className="mb-6 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
						Private Events
					</p>
					<h1 className="font-inter font-black uppercase text-8xl scale-y-[1.05] leading-[0.85] tracking-wide text-[#1a1209] mb-6">
						Bring the <br />
						<span className="italic text-[#D09501]">world tour</span> <br />
						to your event
					</h1>
					<div className="ml-auto h-[2px] w-12 bg-[#bf8000] mb-6" />
					<p className="font-mono text-base font-medium tracking-wide text-slate-600 mb-8">
						Weddings, corporate gatherings, parties — we cater the spread that travels around the world in five bites.
					</p>
					<div className="flex flex-row gap-3 items-center justify-end">
						<button
							type="button"
							onClick={() => scrollToId('inquiry')}
							className="bg-[#bf8000] rounded-full px-8 py-4 font-mono font-semibold text-white tracking-wide text-sm uppercase shadow-lg border-2 border-black/20"
						>
							Request a Quote
						</button>
						<button
							type="button"
							onClick={() => scrollToId('packages')}
							className="bg-white rounded-full px-8 py-4 font-mono font-semibold text-[#bf8000] tracking-wide text-sm uppercase shadow-md border-2 border-[#bf8000]/30"
						>
							See Packages
						</button>
					</div>
				</div>
			</div>

			<div className="bg-[#faf7f2] px-20 py-24">
				<div className="mx-auto max-w-[90rem]">
					<div className="mb-14 ml-2 max-w-3xl">
						<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							What We Cater
						</p>
						<h2 className="mb-4 font-inter text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Designed for <br /> <span className="italic text-[#D09501]">every</span> occasion.
						</h2>
						<div className="mb-5 h-[2px] w-12 bg-[#bf8000]" />
						<p className="text-xl font-light tracking-wide text-[#64605b]">
							From cocktail hour to client lunch — pick the moment, we'll bring the spread.
						</p>
					</div>

					<div className="grid grid-cols-3 gap-8">
						{EventTypes.map((eventType) => (
							<EventTypeCard key={eventType.name} eventType={eventType} />
						))}
					</div>
				</div>
			</div>

			<div id="spaces" className="bg-[#0d0c0b] px-20 py-24">
				<div className="mx-auto max-w-[90rem]">
					<div className="mx-auto mb-20 max-w-3xl text-center">
						<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
							Venues
						</p>
						<h2 className="mb-4 font-inter text-6xl font-black leading-[0.95] tracking-tight text-[#faf7f2]">
							Discover our <span className="italic text-[#fec32f]">spaces.</span>
						</h2>
						<div className="mx-auto mb-5 h-[2px] w-12 bg-[#fec32f]" />
						<p className="text-xl font-light tracking-wide text-white/60">
							Choose the perfect setting for your next gathering.
						</p>
					</div>

					<div className="flex flex-col gap-24">
						{EventSpaces.map((space, idx) => (
							<SpaceCard key={space.name} space={space} reverse={idx % 2 === 1} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
