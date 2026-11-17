import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CornerHero from "../components/CornerHero";
import LiveEventList from "../data/LiveEvents";

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const scrollToEvents = () => document.getElementById('upcoming')?.scrollIntoView({ behavior: 'smooth' })

const LiveEvents = () => {
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
	}, { scope: container })

	return (
		<div ref={container} className="min-w-screen min-h-screen -mt-[8.25rem]">
			<CornerHero
				title={<>Live <em>events</em></>}
				subtext="Workshops and tastings at our Elm St kitchen & bar. Book a seat online."
				image="/Events/2.png"
				buttons={
					<button
						type="button"
						onClick={scrollToEvents}
						className="bg-[#bf8000] rounded-full px-6 py-3 font-mono font-semibold text-white tracking-wide text-sm uppercase shadow-lg border-2 border-black/20 md:px-8 md:py-4"
					>
						See Upcoming
					</button>
				}
			/>

			<div id="upcoming" className="bg-[#faf7f2] px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28">
				<div className="mx-auto max-w-5xl">
					<div data-reveal className="mb-12 max-w-3xl md:mb-16">
						<p className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Upcoming
						</p>
						<h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Pull up a <span className="italic text-[#D09501]">seat.</span>
						</h2>
					</div>

					<div className="space-y-12 md:space-y-16">
						{LiveEventList.map((event) => (
							<article key={event.embedUrl} data-reveal className="overflow-hidden rounded-2xl border-2 border-[#1a1209] bg-white shadow-[0_24px_60px_rgba(26,18,9,0.12)]">
								<div className="flex items-center justify-between gap-4 bg-[#1a1209] px-5 py-3 md:px-6">
									<h3 className="truncate font-inter text-sm md:text-base font-black tracking-tight text-[#faf7f2]">
										{event.title}
									</h3>
									<a
										href={event.embedUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="shrink-0 font-mono text-[10px] md:text-xs font-semibold uppercase tracking-[0.16em] text-[#fec32f] hover:text-white"
									>
										Full page ↗
									</a>
								</div>
								<iframe
									src={event.embedUrl}
									title={event.title}
									loading="lazy"
									className="block h-[760px] w-full sm:h-[800px] md:h-[860px] lg:h-[620px]"
									allow="fullscreen; payment"
								/>
							</article>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default LiveEvents
