import EventTypeCard from "../components/EventTypeCard";
import SpaceCard from "../components/SpaceCard";
import EventTypes from "../data/EventTypes";
import EventSpaces from "../data/EventSpaces";
import InquiryForm from "../components/InquiryForm";

const INQUIRY_EMAIL = 'theempanadasbox1@gmail.com';

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

				<div className="absolute z-20 mr-6 max-w-sm text-right md:mr-10 md:max-w-lg lg:mr-16 lg:max-w-2xl">
					<p className="mb-4 font-mono text-[10px] font-black uppercase tracking-[0.3em] text-[#bf8000] md:mb-6 md:text-xs">
						Private Events
					</p>
					<h1 className="font-inter font-black uppercase text-4xl scale-y-[1.05] leading-[0.85] tracking-wide text-[#1a1209] mb-6 md:text-6xl lg:text-8xl">
						Bring the <br />
						<span className="italic text-[#D09501]">world tour</span> <br />
						to your event
					</h1>
					<div className="ml-auto h-[2px] w-12 bg-[#bf8000] mb-6" />
					<p className="font-mono text-sm font-semibold tracking-wide text-slate-800 mb-6 md:mb-8 md:text-base">
						Weddings, corporate gatherings, parties — we cater the spread that travels around the world in five bites.
					</p>
					<div className="flex flex-col items-end gap-3 md:flex-row md:items-center md:justify-end">
						<button
							type="button"
							onClick={() => scrollToId('inquiry')}
							className="bg-[#bf8000] rounded-full px-6 py-3 font-mono font-semibold text-white tracking-wide text-sm uppercase shadow-lg border-2 border-black/20 md:px-8 md:py-4"
						>
							Request a Quote
						</button>
						<button
							type="button"
							onClick={() => scrollToId('destinations')}
							className="bg-white rounded-full px-6 py-3 font-mono font-semibold text-[#bf8000] tracking-wide text-sm uppercase shadow-md border-2 border-[#bf8000]/30 md:px-8 md:py-4"
						>
							See Destinations
						</button>
					</div>
				</div>
			</div>

			<div className="bg-[#faf7f2] px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
				<div className="mx-auto max-w-[90rem]">
					<div className="mb-10 ml-2 max-w-3xl md:mb-14">
						<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							What We Cater
						</p>
						<h2 className="mb-4 font-inter text-4xl font-black leading-[0.95] tracking-tight text-[#1a1209] md:text-5xl lg:text-6xl">
							Designed for <br /> <span className="italic text-[#D09501]">every</span> occasion.
						</h2>
						<div className="mb-5 h-[2px] w-12 bg-[#bf8000]" />
						<p className="text-base font-light tracking-wide text-[#64605b] md:text-lg lg:text-xl">
							From cocktail hour to client lunch — pick the moment, we'll bring the spread.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{EventTypes.map((eventType) => (
							<EventTypeCard key={eventType.name} eventType={eventType} />
						))}
					</div>
				</div>
			</div>

			<div id="destinations" className="bg-[#0d0c0b] px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
				<div className="mx-auto max-w-[90rem]">
					<div className="mx-auto mb-12 max-w-3xl text-center md:mb-20">
						<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
							Venues
						</p>
						<h2 className="mb-4 font-inter text-4xl font-black leading-[0.95] tracking-tight text-[#faf7f2] md:text-5xl lg:text-6xl">
							Discover our <span className="italic text-[#fec32f]">spaces.</span>
						</h2>
						<div className="mx-auto mb-5 h-[2px] w-12 bg-[#fec32f]" />
						<p className="text-base font-light tracking-wide text-white/60 md:text-lg lg:text-xl">
							Choose the perfect setting for your next gathering.
						</p>
					</div>

					<div className="flex flex-col gap-16 md:gap-24">
						{EventSpaces.map((space, idx) => (
							<SpaceCard key={space.name} space={space} reverse={idx % 2 === 1} />
						))}
					</div>
				</div>
			</div>

			<div id="inquiry" className="bg-[#faf7f2] px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
				<div className="mx-auto max-w-[90rem]">
					<div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
						<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Request a Quote
						</p>
						<h2 className="mb-4 font-inter text-4xl font-black leading-[0.95] tracking-tight text-[#1a1209] md:text-5xl lg:text-6xl">
							Tell us about <br /> your <span className="italic text-[#D09501]">event.</span>
						</h2>
						<div className="mx-auto mb-5 h-[2px] w-12 bg-[#bf8000]" />
						<p className="text-base font-light tracking-wide text-[#64605b] md:text-lg lg:text-xl">
							Send us the details — we'll reply within one business day with a custom quote.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
						<InquiryForm/>
						<div className="lg:col-span-2 flex flex-col gap-8 self-start rounded-[1.5rem] border border-[#ede5d8] bg-white p-8 shadow-sm">
							<div>
								<p className="mb-3 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">
									Or skip the form.
								</p>
								<h3 className="font-inter text-2xl font-black tracking-tight text-[#1a1209]">
									Email us at:
								</h3>
								<a
									href={`mailto:${INQUIRY_EMAIL}`}
									className="mt-4 inline-block font-inter text-xl font-bold text-[#bf8000] underline underline-offset-4"
								>
									{INQUIRY_EMAIL}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;

//emergency commit, busy work + wrecked car + police pulled over = no commit