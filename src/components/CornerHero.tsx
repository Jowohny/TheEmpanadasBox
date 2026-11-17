import { useEffect, useRef, useState, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type CornerHeroProps = {
	title: ReactNode
	subtext: ReactNode
	image: string | string[]
	imageAlt?: string
	buttons?: ReactNode
}

const SLIDE_MS = 3000

const CornerHero = ({ title, subtext, image, imageAlt = "", buttons }: CornerHeroProps) => {
	const container = useRef<HTMLElement>(null)
	const images = Array.isArray(image) ? image : [image]
	const [current, setCurrent] = useState(0)
	const previous = useRef(0)

	useEffect(() => {
		if (images.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
		const timer = setTimeout(() => setCurrent(i => (i + 1) % images.length), SLIDE_MS)
		return () => clearTimeout(timer)
	}, [images.length, current])

	useGSAP(() => {
		if (previous.current === current) return
		const slides = gsap.utils.toArray<HTMLElement>("[data-hero-slide]")
		slides.forEach((el, i) => gsap.set(el, { zIndex: i === current ? 2 : i === previous.current ? 1 : 0 }))
		gsap.fromTo(slides[current],
			{ clipPath: "inset(0% 0% 0% 100%)" },
			{ clipPath: "inset(0% 0% 0% 0%)", duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1.2, ease: "power3.inOut", overwrite: true },
		)
		previous.current = current
	}, { dependencies: [current], scope: container })

	useGSAP(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
		gsap.from("[data-hero-item]", { autoAlpha: 0, y: 24, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0.2 })
	}, { scope: container })

	return (
		<section ref={container} className="relative bg-[#faf7f2] lg:h-[calc(100vh+2.25rem)]">
			<div className="relative h-[65vh] overflow-hidden md:h-[75vh] lg:absolute lg:inset-0 lg:h-auto">
				{images.map((src, i) => (
					<img
						key={src}
						data-parallax
						data-hero-slide
						src={src}
						alt={i === current ? imageAlt : ""}
						aria-hidden={i !== current}
						style={i === 0 ? { zIndex: 2 } : { clipPath: "inset(0% 0% 0% 100%)" }}
						className="absolute inset-0 h-full w-full object-cover"
					/>
				))}
				{images.length > 1 && (
					<div className="absolute bottom-4 right-4 z-10 flex gap-2 lg:bottom-12 lg:right-16">
						{images.map((src, i) => (
							<button
								key={src}
								type="button"
								onClick={() => setCurrent(i)}
								aria-label={`Show image ${i + 1} of ${images.length}`}
								aria-current={i === current}
								className={`h-2.5 rounded-full shadow transition-all duration-300 ${i === current ? 'w-8 bg-[#fec32f]' : 'w-2.5 bg-white/70 hover:bg-white'}`}
							/>
						))}
					</div>
				)}
			</div>

			<div className="relative z-10 border-t-4 border-[#bf8000] bg-[#faf7f2] px-6 py-10 md:px-12 md:py-12 lg:absolute lg:bottom-12 lg:left-16 lg:max-w-xl lg:px-10 lg:py-10">
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
