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
	const [active, setActive] = useState(0)
	const navigate = useNavigate()

	const section = useRef<HTMLDivElement>(null)
	const viewport = useRef<HTMLDivElement>(null)
	const track = useRef<HTMLDivElement>(null)
	const items = useRef<(HTMLDivElement | null)[]>([])
	const info = useRef<HTMLDivElement>(null)
	const activeRef = useRef(0)
	const first = useRef(true)
	activeRef.current = active

	// Slide the track so item `i` sits dead-center, scale it up, dim the rest.
	const positionTo = (i: number, animate: boolean) => {
		const vp = viewport.current, tr = track.current, it = items.current[i]
		if (!vp || !tr || !it) return
		const d = animate ? 0.55 : 0
		gsap.to(tr, {
			x: vp.clientWidth / 2 - (it.offsetLeft + it.offsetWidth / 2),
			duration: d, ease: "power3.out", overwrite: true,
		})
		items.current.forEach((el, idx) => {
			if (!el) return
			gsap.to(el, {
				scale: idx === i ? 1.5 : 0.85,
				autoAlpha: idx === i ? 1 : 0.4,
				duration: d, ease: "power3.out", overwrite: true,
			})
		})
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
				if (i !== last) { last = i; setActive(i) }
			},
		})
	}, { scope: section })

	useGSAP(() => {
		const animate = !first.current && !reducedMotion()
		first.current = false
		positionTo(active, animate)
		if (animate) {
			gsap.fromTo(info.current, { autoAlpha: 0.3, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out", overwrite: true })
		}
	}, { dependencies: [active], scope: section })

	useGSAP(() => {
		const onResize = () => positionTo(activeRef.current, false)
		window.addEventListener("resize", onResize)
		return () => window.removeEventListener("resize", onResize)
	}, { scope: section })

	const go = (dir: number) => setActive(a => Math.min(len - 1, Math.max(0, a + dir)))

	const current = Empanadas[active]
	const counter = String(active + 1).padStart(2, '0')
	const total = String(len).padStart(2, '0')
	const tagline = current.description.split(', ').join(' · ')

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

			<div ref={viewport} className="relative flex-1 min-h-0 overflow-hidden flex items-center -mx-6 md:-mx-12 lg:-mx-20">
				<div ref={track} className="flex items-center gap-8 md:gap-16 shrink-0">
					{Empanadas.map((emp, i) => (
						<div
							key={emp.name}
							ref={el => { items.current[i] = el }}
							className="shrink-0 h-[38vw] w-[38vw] md:h-[20vh] md:w-[20vh] rounded-full overflow-hidden"
						>
							<img src={emp.image} alt={emp.name} className="h-full w-full object-cover" />
						</div>
					))}
				</div>
			</div>

			<div ref={info} className="text-center">
				<h2 className="font-inter text-4xl md:text-7xl lg:text-9xl font-black uppercase scale-y-[1.05] tracking-tight leading-[0.85] text-[#1a1209]">
					{current.name}
				</h2>
				<div className="mx-auto my-6 h-[2px] w-12 bg-[#bf8000]" />
				<p className="text-base md:text-lg lg:text-xl font-light tracking-wide text-[#64605b]">
					{tagline}
				</p>
			</div>

			<div className="mt-6 flex items-center justify-between">
				<div className="flex gap-4 md:gap-6 lg:gap-8 font-mono text-3xl md:text-5xl lg:text-6xl text-[#7a6a55]">
					<button type="button" onClick={() => go(-1)} aria-label="Previous" className="hover:text-[#bf8000]">←</button>
					<button type="button" onClick={() => go(1)} aria-label="Next" className="hover:text-[#bf8000]">→</button>
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
