import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Milestones } from '../data/Origins';
import { Family } from '../data/Family';

gsap.registerPlugin(ScrollTrigger);

const WHO_IMAGE = ''
const CATERING_IMAGE = ''
const FROZEN_IMAGE = ''

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Photo = ({ src, className = '', ...rest }: { src: string, className?: string } & React.HTMLAttributes<HTMLDivElement>) => (
	<div {...rest} className={`overflow-hidden bg-[#ede5d8] ${className}`}>
		{src && <img data-parallax src={src} alt="" className="h-full w-full object-cover" />}
	</div>
)

const AboutUs = () => {
	const navigate = useNavigate()
	const container = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		if (reducedMotion()) return

		gsap.set("[data-reveal]", { autoAlpha: 0, y: 40 })
		ScrollTrigger.batch("[data-reveal]", {
			start: "top 88%",
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

		gsap.to("[data-hero-copy]", {
			yPercent: -25, autoAlpha: 0, ease: "none",
			scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom 45%", scrub: true },
		})

		gsap.utils.toArray<HTMLElement>("[data-rule]").forEach(el => {
			gsap.from(el, {
				scaleX: 0, transformOrigin: "left center", duration: 0.9, ease: "power3.out",
				scrollTrigger: { trigger: el, start: "top 90%", once: true },
			})
		})

		gsap.utils.toArray<HTMLElement>("[data-line]").forEach(el => {
			gsap.fromTo(el,
				{ scaleY: 0 },
				{ scaleY: 1, transformOrigin: "top center", ease: "none",
					scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 65%", scrub: true } },
			)
		})

		gsap.utils.toArray<HTMLElement>("[data-pin]").forEach(el => {
			gsap.from(el, {
				scale: 0, autoAlpha: 0, duration: 0.6, ease: "back.out(2)",
				scrollTrigger: { trigger: el, start: "top 85%", once: true },
			})
		})

		gsap.fromTo("[data-word]",
			{ xPercent: -8 },
			{ xPercent: 8, ease: "none",
				scrollTrigger: { trigger: "[data-word]", start: "top bottom", end: "bottom top", scrub: true } },
		)
	}, { scope: container })

	return (
		<div ref={container} className="min-w-screen min-h-screen -mt-[8.25rem] overflow-x-hidden bg-[#faf7f2]">
			<div data-hero className="relative flex items-center justify-center overflow-hidden">
				<img
					data-parallax
					src="/EmpanadaHero.webp"
					className="z-0 w-full object-cover"
					style={{ height: 'calc(100vh + 2.25rem)' }}
				/>
				<div className="absolute inset-0 z-10 bg-radial-[at_50%_60%] from-black/80 via-black/40 to-transparent" />
				<div className="absolute inset-0 z-10 -mt-40 md:-mt-60 bg-gradient-to-b from-white via-white/[0.0001] to-transparent" />

				<div data-hero-copy className="absolute z-20 flex max-w-4xl flex-col items-center px-6 text-center">
					<div data-reveal className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 md:px-4 py-2 backdrop-blur-md">
						<span className="font-mono text-[15px] md:text-s font-black uppercase tracking-[0.22em] text-white">
							Empanadas Box
						</span>
					</div>
					<h1 data-reveal className="mb-6 font-inter text-7xl sm:text-8xl md:text-9xl font-black uppercase leading-[0.85] tracking-wide text-white">
						About <span className="italic text-[#fec32f]">us</span>
					</h1>
					<div data-reveal className="mb-6 h-[2px] w-12 bg-[#fec32f]" />
				</div>
			</div>

			<div className="relative overflow-hidden bg-[#faf7f2] px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28">
				<div className="relative mx-auto max-w-[90rem] lg:flex lg:justify-end">
					<Photo data-reveal src={WHO_IMAGE} className="h-60 sm:h-80 w-full rounded-xl lg:h-[42rem] lg:w-[60%]" />
					<div className="relative -mt-10 mx-auto w-[92%] bg-white p-7 sm:p-10 shadow-[0_30px_70px_rgba(26,18,9,0.16)] lg:absolute lg:left-0 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[46%] lg:-translate-y-1/2 lg:p-12">
						<div data-rule className="mb-6 h-[3px] w-14 bg-[#bf8000]" />
						<p data-reveal className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Insider
						</p>
						<h2 data-reveal className="font-inter text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Who are we?
						</h2>
						<div data-reveal className="mt-6 space-y-5 text-base md:text-lg font-light leading-relaxed text-[#64605b]">
							Empanada's Box is a local, family-owned restaurant and wholesale food manufacturer
							established in 2020. Built on family heritage and a passion for authentic Latin street food, we
							merge traditional Argentine cooking techniques with a diverse menu of globally inspired flavors.
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28">
				<div className="mx-auto max-w-[90rem]">
					<p data-reveal className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
						Our Origins
					</p>
					<h2 data-reveal className="font-inter text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
						From a Pop-Up to Elm Street
					</h2>
					<div data-rule className="my-6 h-[2px] w-12 bg-[#bf8000]" />
					<p data-reveal className="max-w-2xl text-base md:text-lg font-light leading-relaxed text-[#64605b]">
						Our journey started in the heart of the community with a simple table, a pop-up tent, and a
						passion for sharing authentic South American street food.
					</p>

					<div className="relative mt-12 md:mt-16">
						<div data-line className="absolute left-[11px] top-4 bottom-4 border-l-[3px] border-dotted border-[#bf8000]/40 md:left-[13px]" />

						<ol className="flex flex-col gap-12 md:gap-16">
							{Milestones.map((m) => (
								<li key={m.marker} data-reveal className="relative pl-12 md:pl-16">
									<span data-pin className="absolute left-0 top-0 bg-white pb-1">
										<img src="/icons/pin.svg" alt="" className="h-6 w-6 md:h-7 md:w-7" />
									</span>
									<p className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.22em] text-[#bf8000]">
										{m.marker}
									</p>
									<h3 className="mt-2 font-inter text-2xl md:text-3xl font-black leading-tight tracking-tight text-[#1a1209]">
										{m.title}
									</h3>
									<p className="mt-3 max-w-2xl text-base md:text-lg font-light leading-relaxed text-[#64605b]">
										{m.body}
									</p>
								</li>
							))}
						</ol>
					</div>
				</div>
			</div>

			<div className="bg-[#faf7f2] px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28">
				<div className="mx-auto max-w-[90rem]">
					<p data-reveal className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
						The Team
					</p>
					<h2 data-reveal className="font-inter text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
						Meet the Nunez Family
					</h2>
					<div data-rule className="my-6 h-[2px] w-12 bg-[#bf8000]" />

					<div className="flex flex-col md:flex-row md:justify-center gap-12 md:gap-6 lg:gap-10">
						{Family.map((member, i) => (
							<div key={member.name} data-reveal className={`w-full md:w-1/3 ${i%2===1 ? 'md:mt-28' : 'md:mt-14'}`}>
								<Photo src={member.picture} className="h-64 sm:h-88 md:h-[17rem] lg:h-[23rem] w-full rounded-xl" />
								<h3 className="mt-6 font-inter text-xl md:text-2xl font-black tracking-tight text-black">{member.name}</h3>
								<p className="mt-1 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#bf8000]">{member.title}</p>
								<p className="mt-4 text-sm md:text-base font-light leading-relaxed text-black/70">{member.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="relative overflow-hidden bg-white">
				{CATERING_IMAGE && (
					<img data-parallax src={CATERING_IMAGE} alt="" className="absolute inset-0 h-full w-full object-cover" />
				)}
				<div className="relative mx-auto max-w-[90rem] px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36">
					<div className="lg:w-[56%]">
						<p data-reveal className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							For your crew
						</p>
						<h2 data-reveal className="font-inter text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-black">
							Catering
						</h2>
						<div data-rule className="my-6 h-[2px] w-12 bg-[#fec32f]" />
						<p data-reveal className="mb-8 max-w-2xl text-base md:text-lg font-light leading-relaxed text-black/70">
							Bring the flavor of our kitchen to your next gathering. From office lunches and corporate mixers
							to milestone celebrations, our easy drop-off catering delivers hot, fresh empanadas and sides
							with zero hassle and no utensils required.
						</p>
						<a
							href="https://theempanadasboxcatering.square.site"
							data-reveal
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block rounded-full bg-[#fec32f] px-6 py-3 md:px-8 md:py-4 font-mono text-xs md:text-sm font-semibold uppercase tracking-wide text-[#1a1209] shadow-md"
						>
							Explore Our Catering Menu →
						</a>
					</div>
				</div>
			</div>

			<div className="relative overflow-hidden bg-black px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36">
				<span data-word className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none font-inter text-[6rem] sm:text-[9rem] md:text-[13rem] lg:text-[17rem] font-black uppercase leading-none tracking-tighter text-white/[0.08]">
					Mission
				</span>
				<div className="relative mx-auto max-w-[90rem]">
					<div className="max-w-3xl lg:ml-auto">
						<p data-reveal className="mb-6 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
							Our Mission
						</p>
						<p data-reveal className="font-inter text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-white/90">
							To bring a different culture to Cincinnati and the rest of the country, fusing our roots with
							the flavors of others. Empanadas are the perfect finger food!
						</p>
					</div>
				</div>
			</div>

			<div className="bg-[#faf7f2] px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28">
				<div className="mx-auto grid max-w-[90rem] items-center gap-10 lg:grid-cols-[5fr_6fr] lg:gap-20">
					<div>
						<p data-reveal className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Stock your freezer
						</p>
						<h2 data-reveal className="font-inter text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Frozen Empanadas
						</h2>
						<div data-rule className="my-6 h-[2px] w-12 bg-[#bf8000]" />
						<p data-reveal className="mb-8 text-base md:text-lg font-light leading-relaxed text-[#64605b]">
							Hand-crimped in our kitchen and flash-frozen to lock in peak flavor, they bake up golden and
							restaurant-crisp in minutes right from your oven or air fryer.
						</p>
						<button
							type="button"
							onClick={() => navigate('/ShipNationwide')}
							data-reveal
							className="rounded-full bg-[#bf8000] px-6 py-3 md:px-8 md:py-4 font-mono text-xs md:text-sm font-semibold uppercase tracking-wide text-white shadow-md"
						>
							Shop Frozen Boxes →
						</button>
					</div>
					<Photo src={FROZEN_IMAGE} className="aspect-[4/3] rounded-xl" />
				</div>
			</div>
		</div>
	)
}

export default AboutUs
