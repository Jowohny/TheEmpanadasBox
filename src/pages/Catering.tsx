import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CATERING_URL = 'https://theempanadasboxcatering.square.site/';

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Catering = () => {
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
			<div className="relative flex items-center justify-center overflow-hidden">
				<img
					data-parallax
					src="/EmpanadaPics/EzCaterer Menu/3 Empanada Lunch Box.jpg"
					className="z-0 object-cover"
					style={{ width: '100vw', height: 'calc(100vh + 2.25rem)' }}
				/>
				<div className="absolute inset-0 z-10 bg-radial-[at_50%_65%] from-black/60 via-black/20 to-transparent" />
				<div className="absolute inset-0 z-10 -mt-60 bg-gradient-to-b from-white via-white/[0.0001] to-transparent" />

				<div className="absolute z-20 flex max-w-4xl flex-col items-center px-4 md:px-6 text-center">
					<div data-reveal className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 md:px-4 py-1.5 md:py-2 backdrop-blur-md">
						<span className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.22em] text-white">
							Catering
						</span>
					</div>

					<h1 data-reveal className="mb-5 md:mb-6 font-inter text-4xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.85] tracking-wide text-white">
						Bring the box <br />
						to your <span className="italic text-[#fec32f]">crew.</span>
					</h1>

					<div data-reveal className="mb-5 md:mb-6 h-[2px] w-12 bg-[#fec32f]" />

					<p data-reveal className="mb-8 md:mb-10 max-w-2xl font-mono text-sm md:text-base lg:text-lg font-medium tracking-wide text-white px-2">
						Boxed lunches, drop-off platters, full-spread catering. <br /> Order ahead through our ezCater storefront.
					</p>

					<a
						data-reveal
						href={CATERING_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full border-2 border-black/20 bg-[#fec32f] px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 font-mono text-xs md:text-sm lg:text-base font-semibold uppercase tracking-wide text-[#1a1209] shadow-lg"
					>
						View Catering Menu →
					</a>
				</div>
			</div>
		</div>
	);
};

export default Catering;
