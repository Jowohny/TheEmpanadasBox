import Empanadas from "../data/Empanadas";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const len = Empanadas.length;

const EmpandaCarousel = () => {
	const [currentEmpanadas, setCurrentEmpanadas] = useState<number[]>([0, 1, 2])
	const navigate = useNavigate()

	const section = useRef<HTMLDivElement>(null)
	const nameRef = useRef<HTMLHeadingElement>(null)
	const imgRef = useRef<HTMLImageElement>(null)

	const useNextEmpanadas = () => {
		setCurrentEmpanadas(currentEmpanadas.map(index => (index - 1 + len) % len))
	}

	const usePreviousEmpanadas = () => {
		setCurrentEmpanadas(currentEmpanadas.map(index => (index + 1 + len) % len))
	}

	const setEmpanadaTo = (i: number) => {
		setCurrentEmpanadas([(i - 1 + len) % len, i, (i + 1) % len])
	}

	useGSAP(() => {
		if (reducedMotion()) return

		let last = -1
		ScrollTrigger.create({
			trigger: section.current,
			start: "top top+=96",
			end: () => "+=" + window.innerHeight * 1.3,
			pin: true,
			scrub: true,
			refreshPriority: 1,
			onUpdate: self => {
				const i = Math.min(len - 1, Math.floor(self.progress * len))
				if (i !== last) { last = i; setEmpanadaTo(i) }
			},
		})
	}, { scope: section })

	const activeIndex = currentEmpanadas[1]
	useGSAP(() => {
		if (reducedMotion()) return
		gsap.fromTo(nameRef.current, { yPercent: 30, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.45, ease: "power2.out" })
		gsap.fromTo(imgRef.current, { scale: 0.92, autoAlpha: 0.5 }, { scale: 1, autoAlpha: 1, duration: 0.45, ease: "power2.out" })
	}, { dependencies: [activeIndex], scope: section })

	const prev = Empanadas[currentEmpanadas[0]]
	const active = Empanadas[currentEmpanadas[1]]
	const next = Empanadas[currentEmpanadas[2]]
	const counter = String(currentEmpanadas[1] + 1).padStart(2, '0')
	const total = String(len).padStart(2, '0')
	const tagline = active.description.split(', ').join(' · ')

	return (
		<div ref={section} className="bg-[#faf7f2] min-h-[80vh] lg:h-[88vh] flex flex-col px-6 md:px-12 lg:px-20 py-10">
			<div className="flex items-center justify-between">
				<p className="font-mono text-xs md:text-sm lg:text-base font-black uppercase tracking-[0.3em] text-[#bf8000]">
					The World Tour
				</p>
				<p className="font-mono text-xs md:text-sm lg:text-base font-black uppercase tracking-[0.3em] text-[#bf8000]">
					{counter} / {total}
				</p>
			</div>

			<div className="flex-1 flex items-center justify-center gap-4 md:gap-8 lg:gap-16 py-4 min-h-0">
				<button
					type="button"
					onClick={useNextEmpanadas}
					aria-label={`Previous: ${prev.name}`}
					className="hidden md:block shrink-0 h-[14vh] w-[14vh] rounded-full overflow-hidden opacity-35 hover:opacity-60"
				>
					<img src={prev.image} className="h-full w-full object-cover" />
				</button>

				<div className="shrink-0 h-[55vw] w-[55vw] md:h-[35vh] md:w-[35vh] lg:h-[40vh] lg:w-[40vh] rounded-full overflow-hidden">
					<img ref={imgRef} src={active.image} alt={active.name} className="h-full w-full object-cover" />
				</div>

				<button
					type="button"
					onClick={usePreviousEmpanadas}
					aria-label={`Next: ${next.name}`}
					className="hidden md:block shrink-0 h-[14vh] w-[14vh] rounded-full overflow-hidden opacity-35 hover:opacity-60"
				>
					<img src={next.image} className="h-full w-full object-cover" />
				</button>
			</div>

			<div className="text-center">
				<h2 ref={nameRef} className="font-inter text-4xl md:text-7xl lg:text-9xl font-black uppercase scale-y-[1.05] tracking-tight leading-[0.85] text-[#1a1209]">
					{active.name}
				</h2>
				<div className="mx-auto my-6 h-[2px] w-12 bg-[#bf8000]" />
				<p className="text-base md:text-lg lg:text-xl font-light tracking-wide text-[#64605b]">
					{tagline}
				</p>
			</div>

			<div className="mt-6 flex items-center justify-between">
				<div className="flex gap-4 md:gap-6 lg:gap-8 font-mono text-3xl md:text-5xl lg:text-6xl text-[#7a6a55]">
					<button type="button" onClick={useNextEmpanadas} aria-label="Previous" className="hover:text-[#bf8000]">←</button>
					<button type="button" onClick={usePreviousEmpanadas} aria-label="Next" className="hover:text-[#bf8000]">→</button>
				</div>
				<button
					type="button"
					onClick={() => navigate('ShipNationwide')}
					className="bg-[#bf8000] rounded-full px-6 md:px-10 lg:px-12 py-3 md:py-5 lg:py-6 font-semibold text-white tracking-wide text-xs md:text-sm lg:text-base uppercase shadow-md"
				>
					Build Your 24 Pack →
				</button>
			</div>
		</div>
	)
}

export default EmpandaCarousel
