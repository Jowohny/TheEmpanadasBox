import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type CornerHeroProps = {
	title: ReactNode
	subtext: ReactNode
	image: string
	imageAlt?: string
	buttons?: ReactNode
}

const CornerHero = ({ title, subtext, image, imageAlt = "", buttons }: CornerHeroProps) => {
	const container = useRef<HTMLElement>(null)

	useGSAP(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
		gsap.from("[data-hero-item]", { autoAlpha: 0, y: 24, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0.2 })
	}, { scope: container })

	return (
		<section ref={container} className="relative bg-[#faf7f2] lg:h-[calc(100vh+2.25rem)]">
			<div className="relative h-[65vh] overflow-hidden md:h-[75vh] lg:absolute lg:inset-0 lg:h-auto">
				<img data-parallax src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
			</div>

			<div className="relative border-t-4 border-[#bf8000] bg-[#faf7f2] px-6 py-10 md:px-12 md:py-12 lg:absolute lg:bottom-12 lg:left-16 lg:max-w-xl lg:px-10 lg:py-10">
				<h1 data-hero-item className="font-inter text-5xl font-black leading-[0.95] tracking-tight text-[#1a1209] md:text-6xl [&_em]:italic [&_em]:text-[#D09501] uppercase">
					{title}
				</h1>
				<p data-hero-item className="mt-5 max-w-md text-base font-light leading-relaxed text-[#5f5449] md:text-lg">
					{subtext}
				</p>
				{buttons && (
					<div data-hero-item className="mt-7 flex flex-wrap items-center gap-3">
						{buttons}
					</div>
				)}
			</div>
		</section>
	)
}

export default CornerHero
