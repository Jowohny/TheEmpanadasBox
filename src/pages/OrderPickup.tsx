import LocationCard from '../components/LocationCard';
import MarketLocationCard from '../components/MarketLocationCard';
import Locations from '../data/LocationInfo';
import MarketLocations from '../data/MarketLocationInfo';
import RewardsTiers from '../data/RewardsTiers';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const OrderPickup = () => {
	const navigate = useNavigate()
	const container = useRef<HTMLDivElement>(null)
	const hero = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		if (reducedMotion()) return

		gsap.set("[data-reveal]", { autoAlpha: 0, y: 40 })
		ScrollTrigger.batch("[data-reveal]", {
			start: "top 88%",
			onEnter: batch =>
				gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, overwrite: true }),
		})

		gsap.fromTo(hero.current,
			{ backgroundPosition: "center 45%" },
			{ backgroundPosition: "center 55%", ease: "none",
				scrollTrigger: { trigger: hero.current, start: "top top", end: "bottom top", scrub: true } },
		)
	}, { scope: container })

	return (
		<div ref={container} className="min-w-screen min-h-screen">
			<div
				ref={hero}
				className="min-h-screen w-full relative flex flex-col items-center justify-end -mt-[8.25rem] pb-8 md:pb-12 overflow-hidden bg-cover bg-center"
				style={{ backgroundImage: 'url("/EmpanadaPics/Singapore Case.png")' }}
			>
				<div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent" />
				<div className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/5 to-transparent" />

				<div className="absolute top-1/2 left-0 -translate-y-1/2 ml-6 md:ml-8 lg:ml-12 max-w-[92vw]">
					<div data-reveal className="inline-block font-mono font-bold uppercase text-[10px] md:text-xs tracking-widest bg-red-400/40 text-red-900 rounded-full py-1 px-3 md:px-4 mb-4 md:mb-8">
						The World Tour Experience
					</div>
					<div className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]">
						<h2 data-reveal className="text-[#765600]">Pick Up.</h2>
						<h2 data-reveal className="text-[#a33522]">Heat Up.</h2>
						<h2 data-reveal className="text-[#765600] mb-4 md:mb-6 lg:mb-8">Eat Up.</h2>
					</div>
					<p data-reveal className="font-sans text-base md:text-2xl lg:text-3xl text-gray-600 tracking-wide font-medium">
						Our handcrafted crusts are designed to travel. <br className="hidden md:block" />
						Journey from our kitchen to your table without <br className="hidden md:block" />
						losing a single note of flavor.
					</p>
				</div>

				<div data-reveal className="relative flex flex-col items-center gap-3">
					<div className="w-16 md:w-24 h-[2px] bg-[#bf8000] mb-2" />
					<p className="font-mono text-xs md:text-base font-bold tracking-[0.2em] uppercase text-black text-center px-4">
						Fresh. Frozen. Ready when you are.
					</p>
				</div>
			</div>

			<div className="bg-[#faf7f2] px-4 md:px-6 py-10 md:py-16">
				<div className="mx-auto max-w-[90rem]">
					<div data-reveal className="mb-8 md:mb-14 text-center">
						<p className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
							Our Locations
						</p>
						<h2 className="mb-3 font-inter text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#242424]">
							Where are we heading today?
						</h2>
						<p className="text-[#64605b] text-base md:text-lg lg:text-xl font-light tracking-wide">
							Find the closest location to you for your next pickup.
						</p>
					</div>

					<div data-reveal className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-20">
						{Locations.map((location) => (
							<LocationCard key={location.name} location={location} />
						))}
					</div>

					<div data-reveal className="mb-8 md:mb-14 text-center">
						<p className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
							Farmers Markets
						</p>
						<h2 className="mb-3 font-inter text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#242424]">
							Check out our market locations!
						</h2>
						<p className="text-[#64605b] text-base md:text-lg lg:text-xl font-light tracking-wide">
							Drop by and see us in person — these locations sell frozen empanadas for at-home preparation.
						</p>
					</div>

					<div data-reveal className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
						{MarketLocations.map((marketLocation) => (
							<MarketLocationCard key={marketLocation.name} marketLocation={marketLocation} />
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

			<div className="relative flex flex-col lg:flex-row min-h-[38rem] items-center lg:justify-between overflow-hidden border-b border-[#e2d8ca] bg-[#faf7f2] px-6 md:px-12 lg:px-20 py-12 md:py-16 gap-10 lg:gap-0">
				<div className="absolute left-0 top-0 h-full w-2 md:w-3 bg-[#fec32f]" />
				<div className="absolute inset-0 bg-[url('/stamps.jpg')] bg-repeat bg-center opacity-[0.06]" />

				<div className="relative z-10 ml-4 md:ml-6 max-w-full lg:max-w-[42rem]">
					<p data-reveal className="mb-3 md:mb-4 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
						Passport Rewards
					</p>
					<h2 data-reveal className="mb-4 md:mb-5 font-inter text-4xl md:text-6xl lg:text-7xl font-black leading-[0.88] tracking-tight text-[#242424]">
						Don't Leave<br />Without Your<br />Stamps!
					</h2>
					<p data-reveal className="mb-6 md:mb-8 max-w-md text-base md:text-lg font-light leading-relaxed text-[#64605b]">
						Sign in at checkout to earn Passport Stamps on every order.
					</p>

					<div className="mb-6 md:mb-9 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
						{RewardsTiers.map(({ stamps, reward }) => (
							<div data-reveal key={stamps} className="rounded-xl border border-[#e2d8ca] bg-white/60 text-center px-3 md:px-5 py-3 md:py-4">
								<p className="font-inter text-2xl md:text-3xl font-black leading-none text-[#242424]">{stamps}</p>
								<p className="mt-1 font-mono text-[10px] font-black uppercase tracking-[0.18em] text-[#fec32f]">Stamps</p>
								<p className="mt-2 font-inter text-[10px] md:text-xs font-bold text-[#5f5a54]">{reward}</p>
							</div>
						))}
					</div>

					<div data-reveal className="flex flex-wrap gap-3 md:gap-4">
						<button
							onClick={() => navigate('/Rewards')}
							className="cursor-pointer rounded-full bg-[#fec32f] px-6 md:px-8 py-3 md:py-4 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.16em] text-[#765600] shadow-md transition-colors duration-200 hover:bg-[#eeb11f]"
						>
							Check Stamp Balance
						</button>
						<button
							onClick={() => navigate('/Rewards')}
							className="cursor-pointer rounded-full border border-[#d4c9b8] px-6 md:px-8 py-3 md:py-4 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.16em] text-[#5f5a54] transition-colors duration-200 hover:border-[#fec32f] hover:text-[#242424]"
						>
							Learn More
						</button>
					</div>
				</div>

				<div data-reveal className="relative z-10 mr-0 lg:mr-10 h-[60vw] w-[60vw] md:h-[24rem] md:w-[24rem] lg:h-[33rem] lg:w-[33rem] overflow-hidden rounded-full border-4 md:border-8 border-[#faf7f2] shadow-[0_28px_60px_rgba(26,18,9,0.18)]">
					<img
						src="/EmpanadaPics/EzCaterer Menu/Empanadas by the Dozen.jpg"
						alt="Fresh empanadas"
						className="h-full w-full object-cover object-center"
					/>
				</div>
			</div>

			<div className="relative border-b border-[#e2d8ca] bg-[#0d0c0b] px-6 md:px-12 lg:px-20 py-12 md:py-16">
				<div className="absolute left-0 top-0 h-full w-2 md:w-3 bg-[#fec32f]" />

				<div className="ml-4 md:ml-6">
					<p data-reveal className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
						Reheating Guide
					</p>
					<h2 data-reveal className="mb-8 md:mb-10 font-inter text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#faf7f2]">
						How to Heat Your Empanadas
					</h2>

					<div className="flex flex-col md:flex-row gap-4 md:gap-6">
						<div data-reveal className="flex flex-1 flex-col justify-between rounded-2xl border border-white/8 bg-white/4 p-5 md:p-7">
							<div>
								<p className="mb-2 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#fec32f]">The Gold Standard</p>
								<p className="mb-2 font-inter text-xl md:text-2xl font-black text-[#faf7f2]">Air Fryer</p>
								<p className="text-sm font-light leading-relaxed text-white/40">
									Keeps the crust crispy and the filling perfectly hot all the way through.
								</p>
							</div>
							<div className="mt-4 md:mt-6 rounded-xl border border-[#fec32f]/20 bg-[#fec32f]/8 px-4 md:px-5 py-3 md:py-4">
								<p className="font-mono text-[10px] md:text-xs font-black uppercase tracking-widest text-[#fec32f]">350°F — 3 to 5 mins</p>
							</div>
						</div>

						<div data-reveal className="flex flex-1 flex-col justify-between rounded-2xl border border-white/8 bg-white/4 p-5 md:p-7">
							<div>
								<p className="mb-2 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-white/30">For Large Batches</p>
								<p className="mb-2 font-inter text-xl md:text-2xl font-black text-[#faf7f2]">Oven</p>
								<p className="text-sm font-light leading-relaxed text-white/40">
									Best when feeding a crowd. Place on a wire rack for even heat circulation.
								</p>
							</div>
							<div className="mt-4 md:mt-6 rounded-xl border border-white/8 bg-white/4 px-4 md:px-5 py-3 md:py-4">
								<p className="font-mono text-[10px] md:text-xs font-black uppercase tracking-widest text-white/40">375°F — 5 to 8 mins</p>
							</div>
						</div>

						<div data-reveal className="flex flex-1 flex-col justify-between rounded-2xl border border-red-900/60 bg-red-950/50 p-5 md:p-7">
							<div>
								<p className="mb-2 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-red-400/70">Never Do This</p>
								<p className="mb-2 font-inter text-xl md:text-2xl font-black text-[#faf7f2]">Microwave</p>
								<p className="text-sm font-light leading-relaxed text-white/40">
									Turns the crust soggy and ruins the texture. Do yourself a favor and use the air fryer.
								</p>
							</div>
							<div className="mt-4 md:mt-6 rounded-xl border border-red-900/30 bg-red-950/30 px-4 md:px-5 py-3 md:py-4">
								<p className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-red-400/70">Not recommended — ever</p>
							</div>
						</div>
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
