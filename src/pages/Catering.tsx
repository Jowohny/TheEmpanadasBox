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
			<div className="relative flex items-center justify-start overflow-hidden">
				<img
					data-parallax
					src="/EmpanadaPics/EzCaterer Menu/3 Empanada Lunch Box.jpg"
					className="z-0 object-cover"
					style={{ width: '100vw', height: 'calc(100vh + 2.25rem)' }}
				/>
				<div className="absolute inset-y-0 right-0 bg-white lg:bg-transparent lg:bg-gradient-to-l lg:from-white lg:via-white/95 lg:to-transparent lg:w-[70%] z-10" />

				<div className="absolute right-0 z-20 mr-6 text-right md:mr-10 md:max-w-xl lg:mr-16">
					<p data-reveal className="mb-4 font-mono text-[10px] font-black uppercase tracking-[0.3em] text-[#bf8000] md:mb-6 md:text-xs">
						Catering
					</p>
					<h1 data-reveal className="font-inter font-black uppercase text-4xl scale-y-[1.05] leading-[0.85] tracking-wide text-[#1a1209] mb-6 md:text-6xl lg:text-8xl">
						Bring the box <br />
						to your <span className="italic text-[#D09501]">crew.</span>
					</h1>
					<div data-reveal className="ml-auto h-[2px] w-12 bg-[#bf8000] mb-6" />
					<p data-reveal className="font-mono text-sm font-semibold tracking-wide text-slate-800 mb-6 md:mb-8 md:text-base">
						Boxed lunches, drop-off platters, full-spread catering. Order ahead through our ezCater storefront.
					</p>
					<a
						data-reveal
						href={CATERING_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block bg-[#bf8000] rounded-full px-6 py-3 font-mono font-semibold text-white tracking-wide text-sm uppercase shadow-lg border-2 border-black/20 md:px-8 md:py-4"
					>
						View Catering Menu →
					</a>
				</div>
			</div>
		</div>
	);
};

export default Catering;
