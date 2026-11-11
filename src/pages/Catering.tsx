import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CornerHero from "../components/CornerHero";

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
			<CornerHero
				title={<>Bring the box to your <em>crew.</em></>}
				subtext="Boxed lunches, drop-off platters, full-spread catering. Order ahead through our ezCater storefront."
				image="/EmpanadaPics/EzCaterer Menu/3 Empanada Lunch Box.jpg"
				buttons={
					<a
						href={CATERING_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block bg-[#bf8000] rounded-full px-6 py-3 font-mono font-semibold text-white tracking-wide text-sm uppercase shadow-lg border-2 border-black/20 md:px-8 md:py-4"
					>
						View Catering Menu →
					</a>
				}
			/>
		</div>
	);
};

export default Catering;
