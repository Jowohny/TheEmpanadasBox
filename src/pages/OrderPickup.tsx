import PickupTimetable from '../components/PickupTimetable';
import PlaceRow from '../components/PlaceRow';
import Locations from '../data/LocationInfo';
import MarketLocations from '../data/MarketLocationInfo';
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const shortName = (name: string) => name.split('\n')[1] ?? name

const timetablePlaces = [
	...Locations.map(l => ({ name: shortName(l.name), kind: 'Kitchen', hours: l.hours })),
	...MarketLocations.map(m => ({ name: shortName(m.name).replace(' Farmers Market', ''), kind: 'Farmers market · frozen only', hours: m.hours, market: true })),
]

const HEAT_METHODS = [
	{ name: 'Air Fryer', temp: 350, detail: '3 to 5 mins · the crispiest' },
	{ name: 'Oven', temp: 375, detail: '5 to 8 mins · best for a crowd' },
]

const OrderPickup = () => {
	const navigate = useNavigate()
	const container = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		if (reducedMotion()) return

		gsap.set("[data-reveal]", { autoAlpha: 0, y: 40 })
		ScrollTrigger.batch("[data-reveal]", {
			start: "top 80%",
			onEnter: batch =>
				gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, overwrite: true }),
		})

		gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach(el => {
			gsap.set(el, { scale: 1.25 })
			gsap.fromTo(el,
				{ yPercent: -12 },
				{ yPercent: 12, ease: "none",
					scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
			)
		})

		const slots = gsap.utils.toArray<HTMLElement>("[data-slot='']")
		const todaySlots = gsap.utils.toArray<HTMLElement>("[data-slot='today']")
		gsap.timeline({
			defaults: { ease: "power3.out" },
			scrollTrigger: { trigger: "[data-timetable]", start: "top 78%", once: true },
		})
			.from("[data-day]", { autoAlpha: 0, y: -12, duration: 0.5, stagger: 0.05 })
			.from("[data-place-name]", { autoAlpha: 0, x: -24, duration: 0.6, stagger: 0.08 }, "<0.1")
			.from(slots, { autoAlpha: 0, scale: 0.7, duration: 0.5, stagger: { grid: "auto", from: "start", axis: "x", amount: 0.6 } }, "<0.1")
			.from(todaySlots, { scaleY: 0, transformOrigin: "bottom center", duration: 0.5, stagger: 0.08, ease: "back.out(2.2)" }, "-=0.15")

		gsap.utils.toArray<HTMLElement>("[data-place]").forEach((place, i) => {
			gsap.timeline({ delay: (i % 2) * 0.12, scrollTrigger: { trigger: place, start: "top 85%", once: true } })
				.from(place.querySelector("[data-place-photo]"), { clipPath: "inset(0 100% 0 0)", duration: 0.9, ease: "power3.inOut" })
				.from(place.querySelectorAll("[data-place-text]"), { autoAlpha: 0, y: 18, duration: 0.6, stagger: 0.07, ease: "power3.out" }, "-=0.45")
		})

		const fillTime = 1.8
		const heat = gsap.timeline({ scrollTrigger: { trigger: "[data-heat]", start: "top 75%", once: true } })
		heat.from("[data-heat-fill]", { scaleX: 0, transformOrigin: "left center", duration: fillTime, ease: "power2.inOut" })
		gsap.utils.toArray<HTMLElement>("[data-heat-mark]").forEach((mark, i) => {
			const temp = Number(mark.dataset.heatMark)
			const at = ((temp - 300) / (HEAT_METHODS[HEAT_METHODS.length - 1].temp - 300)) * fillTime
			const readout = mark.querySelector("[data-heat-temp]")!
			const n = { v: 300 }
			heat.from(gsap.utils.toArray("[data-heat-pip]")[i] as HTMLElement, { scaleY: 0, duration: 0.3, ease: "back.out(3)" }, at - 0.15)
				.from(mark, { autoAlpha: 0, y: i % 2 ? -16 : 16, duration: 0.5, ease: "back.out(2)" }, at - 0.15)
				.to(n, { v: temp, duration: at, ease: "power2.inOut", onUpdate: () => { readout.textContent = Math.round(n.v).toString() } }, 0)
		})
		heat.from("[data-strike]", { scaleX: 0, transformOrigin: "left center", duration: 0.4, ease: "power4.in" }, "+=0.1")
	}, { scope: container })

	return (
		<div ref={container} className="min-w-screen min-h-screen">
			<div	className="min-h-screen w-full relative flex flex-col items-center justify-end -mt-[8.25rem] pb-8 md:pb-12 overflow-hidden bg-cover bg-center">
				<div className="absolute inset-0 bg-white lg:bg-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/95 lg:to-transparent lg:w-[60%] z-10" />
				<div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent z-10" />

				<img
					data-parallax
					src="/EmpanadaPics/EzCaterer Menu/Empanada Party Pack - 50 Ppl.jpg"
					className="z-0 object-cover"
					style={{ width: '100vw', height: 'calc(100vh - 2.25rem)' }}
				/>

				<div className="absolute top-1/2 left-0 -translate-y-1/2 ml-6 md:ml-8 lg:ml-12 max-w-[92vw] z-20">
					<div data-reveal className="inline-block font-mono font-bold uppercase text-[10px] md:text-xs tracking-widest bg-red-400/40 text-red-900 rounded-full py-1 px-3 md:px-4 mb-4 md:mb-8">
						The World Tour Experience
					</div>
					<div className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]">
						<h2 data-reveal className="text-[#765600]">Pick Up.</h2>
						<h2 data-reveal className="text-[#a33522]">Heat Up.</h2>
						<h2 data-reveal className="text-[#765600] mb-4 md:mb-6 lg:mb-8">Eat Up.</h2>
					</div>
					<p data-reveal className="ont-mono text-sm font-semibold tracking-wide text-slate-800 mb-6 md:mb-8 md:text-base">
						Our handcrafted crusts are designed to travel. Journey from our <br />
						kitchen to your table without losing a single note of flavor.
					</p>
				</div>

				<div data-reveal className="relative flex flex-col items-center gap-3 z-20">
					<div className="w-16 md:w-24 h-[2px] bg-[#bf8000] mb-2" />
					<p className="font-mono text-xs md:text-base font-bold tracking-[0.2em] uppercase text-black text-center px-4">
						Fresh. Frozen. Ready when you are.
					</p>
				</div>
			</div>

			<div className="bg-[#faf7f2] px-20 py-24">
				<div className="mx-auto max-w-[90rem]">
					<div data-reveal className="mb-12">
						<p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Our Locations
						</p>
						<h2 className="mb-3 font-inter text-6xl font-black tracking-tight text-[#242424]">
							When can you pick up?
						</h2>
						<p className="text-xl font-light tracking-wide text-[#64605b]">
							Two kitchens open six days a week, plus two farmers markets from April to December.
						</p>
					</div>

					<PickupTimetable places={timetablePlaces} />

					<div className="mt-20 grid grid-cols-2 gap-x-16 gap-y-14">
						{Locations.map((location) => (
							<PlaceRow
								key={location.name}
								name={shortName(location.name)}
								address={location.address}
								photo={location.storeFront}
								mapsLink={location.mapsLink}
								phoneNumber={location.phoneNumber}
							/>
						))}
						{MarketLocations.map((market) => (
							<PlaceRow
								key={market.name}
								name={shortName(market.name)}
								address={market.address}
								photo={market.storeFront}
								mapsLink={market.mapsLink}
								notes={[...market.duration.split('\n'), ...market.hours.filter(h => !/^\w+day:/.test(h))]}
							/>
						))}
					</div>
				</div>
			</div>
			<div data-reveal className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 bg-[#0d0c0b] px-4 md:px-10 lg:px-20 py-4 md:py-5 border-y border-white/8">
				<p className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-white/90">
					Order for Delivery
				</p>
				<span className="hidden md:inline text-[#fec32f]/30 scale-x-[3]">-</span>
				{Locations.flatMap((location, li) =>
					[
						{ link: location.doordashLink,  service: 'DoorDash'   },
						{ link: location.uberEatsLinks, service: 'Uber Eats'  },
						{ link: location.postmatesLink, service: 'Postmates'  },
					].map(({ link, service }, si) => {
						const isLast = li === Locations.length - 1 && service === 'Postmates'
						return (
							<div key={`${li}-${si}`} className="flex items-center gap-2 md:gap-3">
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer"
									className="cursor-pointer font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/70 transition-colors duration-200 hover:text-[#fec32f]"
								>
									{service}
									<span className="ml-1 font-normal normal-case tracking-normal text-white/40">
										({location.name.split('\n')[1]})
									</span>
								</a>
								{!isLast && <span className="text-[#fec32f]/20">&bull;</span>}
							</div>
						)
					})
				)}
			</div>

			<div className="relative bg-[#0d0c0b] px-20 py-24">
				<div className="absolute left-0 top-0 h-full w-3 bg-[#fec32f]" />

				<div className="mx-auto grid max-w-[90rem] grid-cols-[5fr_7fr] items-center gap-16">
					<div>
						<p data-reveal className="mb-3 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
							Reheating Guide
						</p>
						<h2 data-reveal className="mb-4 font-inter text-6xl font-black leading-[0.95] tracking-tight text-[#faf7f2]">
							How to heat your empanadas
						</h2>
						<p data-reveal className="text-xl font-light leading-relaxed text-white/60">
							Dry heat keeps the crust crisp. Pick your temperature and you're minutes from dinner.
						</p>
						<p data-reveal className="mt-8 text-lg text-white/60">
							<span className="relative mr-2 font-inter text-xl font-black text-[#e4806d]">
								Microwave
								<span data-strike className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-[#e4806d]" />
							</span>
							Never. It turns the crust soggy every time.
						</p>
					</div>

					<div data-heat className="relative mr-6 h-64">
						<div className="absolute inset-x-0 top-[6.5rem] h-3.5 rounded-full bg-white/10" />
						<div data-heat-fill className="absolute left-0 top-[6.5rem] h-3.5 rounded-full bg-[#fec32f]" style={{ width: `${(HEAT_METHODS[HEAT_METHODS.length - 1].temp - 300)}%` }} />
						<span className="absolute left-0 top-[8.5rem] -translate-x-1/2 text-sm text-white/40">300°</span>
						<span className="absolute left-full top-[8.5rem] -translate-x-1/2 text-sm text-white/40">400°</span>
						{HEAT_METHODS.map((method, i) => (
							<div key={method.name}>
								<div data-heat-pip className="absolute top-[5.75rem] h-9 w-1 -translate-x-1/2 bg-[#faf7f2]" style={{ left: `${method.temp - 300}%` }} />
								<div
									data-heat-mark={method.temp}
									className={`absolute w-60 -translate-x-1/2 text-center ${i % 2 ? 'top-[9rem]' : 'top-0'}`}
									style={{ left: `${method.temp - 300}%` }}
								>
									<p className={`font-inter text-5xl font-black tracking-tight ${i % 2 ? 'text-[#faf7f2]' : 'text-[#fec32f]'}`}>
										<span data-heat-temp>{method.temp}</span>°F
									</p>
									<p className="font-inter text-lg font-extrabold text-[#faf7f2]">{method.name}</p>
									<p className="text-sm text-white/60">{method.detail}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="border-b border-[#e2d8ca] bg-[#faf7f2] px-6 md:px-12 lg:px-20 py-12 md:py-16 text-center">
				<p data-reveal className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
					Order Support
				</p>
				<h2 data-reveal className="mb-8 md:mb-10 font-inter text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#242424]">
					Need Help?
				</h2>

				<div data-reveal className="mb-10 md:mb-12 flex justify-center">
					<button
						onClick={() => navigate('/FAQs')}
						className="cursor-pointer rounded-full border border-[#d4c9b8] px-7 md:px-9 py-3 md:py-4 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.16em] text-[#5f5a54] transition-colors duration-200 hover:border-[#fec32f] hover:text-[#242424]"
					>
						FAQs
					</button>
				</div>

				<div data-reveal className="mx-auto grid max-w-3xl grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
					<div>
						<p className="mb-2 text-base md:text-lg font-light text-[#64605b]">
							Looking to cater an event?
						</p>
						<button
							onClick={() => navigate('/Catering')}
							className="cursor-pointer font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#242424] underline underline-offset-4 transition-colors duration-200 hover:text-[#fec32f]"
						>
							Catering
						</button>
					</div>
					<div>
						<p className="mb-2 text-base md:text-lg font-light text-[#64605b]">
							Looking to ship our empanadas to your house?
						</p>
						<button
							onClick={() => navigate('/ShipNationwide')}
							className="cursor-pointer font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#242424] underline underline-offset-4 transition-colors duration-200 hover:text-[#fec32f]"
						>
							Shipped Boxes
						</button>
					</div>
				</div>
			</div>

		</div>
	)
}

export default OrderPickup
