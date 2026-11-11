import PassportStamp from "../components/PassportStamp";
import RouteStop from "../components/RouteStop";
import TierMultiplier from "../components/TierMultiplier";
import MembershipTiers from "../data/MembershipTiers";
import RewardsTiers from "../data/RewardsTiers";
import StampWays from "../data/StampWays";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CornerHero from "../components/CornerHero";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ROUTE = "M 0 300 C 50 300, 100 298, 130 294 C 180 250, 260 100, 330 109 C 420 120, 470 280, 550 277 C 680 272, 760 100, 880 101 C 930 101, 970 80, 1000 60"
const ROUTE_STOPS = [[130, 294], [330, 109], [550, 277], [880, 101]]

const pageTexture = {
	backgroundColor: '#f3ead9',
	backgroundImage: 'repeating-radial-gradient(circle at 70% 40%, transparent 0 14px, rgba(118,86,0,.05) 14px 15px)',
}

const Rewards = () => {
	const container = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		if (reducedMotion()) return

		const route = document.querySelector<HTMLElement>("[data-route-section]")!
		const mm = gsap.matchMedia()

		mm.add("(min-width: 1280px)", () => {
		const path = document.querySelector<SVGPathElement>("#route-path")!
		const draw = document.querySelector<SVGPathElement>("[data-route-draw]")!
		const len = path.getTotalLength()

		const stopAt = ROUTE_STOPS.map(([sx, sy]) => {
			let best = 0, bestDist = Infinity
			for (let i = 0; i <= 400; i++) {
				const p = path.getPointAtLength((i / 400) * len)
				const d = (p.x - sx) ** 2 + (p.y - sy) ** 2
				if (d < bestDist) { bestDist = d; best = i / 400 }
			}
			return best
		})

		const counter = { v: 0 }
		const countEl = document.querySelector("[data-route-count]")!
		const showCount = () => { countEl.textContent = Math.round(counter.v).toString() }

		const tl = gsap.timeline({ paused: true, defaults: { ease: "none" } })
		ScrollTrigger.create({
			trigger: route,
			start: "top 45%",
			once: true,
			onEnter: () => { gsap.to(tl, { progress: 1, duration: 2.6, ease: "power1.inOut" }) },
		})
		tl.fromTo(draw, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1 }, 0)
			.to("[data-route-plane]", { motionPath: { path, align: path, alignOrigin: [0.5, 0.5] }, duration: 1 }, 0)
		gsap.utils.toArray<HTMLElement>("[data-route-stop]").forEach((stop, i) => {
			const at = stopAt[i], prev = i ? stopAt[i - 1] : 0
			tl.to(counter, { v: RewardsTiers[i].stamps, duration: at - prev, onUpdate: showCount }, prev)
				.fromTo(stop,
					{ autoAlpha: 0, scale: 0.4, y: 30 },
					{ autoAlpha: 1, scale: 1, y: 0, duration: 0.08, ease: "back.out(2.5)" },
					Math.max(0, at - 0.03))
		})
		showCount()
		})

		mm.add("(max-width: 1279px)", () => {
			const counter = { v: 0 }
			const countEl = document.querySelector("[data-route-count-v]")!
			const showCount = () => { countEl.textContent = Math.round(counter.v).toString() }
			const tl = gsap.timeline({ paused: true })
			ScrollTrigger.create({
				trigger: "[data-route-v]",
				start: "top 70%",
				once: true,
				onEnter: () => { tl.play() },
			})
			gsap.utils.toArray<HTMLElement>("[data-route-v-stop]").forEach((stop, i) => {
				tl.from(stop.querySelector("img"), { autoAlpha: 0, scale: 0.4, duration: 0.45, ease: "back.out(2.5)" })
					.from(stop.querySelectorAll("[data-route-v-text]"), { autoAlpha: 0, x: 16, duration: 0.4, stagger: 0.06, ease: "power3.out" }, "<0.1")
					.to(counter, { v: RewardsTiers[i].stamps, duration: 0.5, ease: "power1.out", onUpdate: showCount }, "<")
				const leg = stop.querySelector("[data-route-v-leg]")
				if (leg) tl.from(leg, { scaleY: 0, transformOrigin: "top center", duration: 0.45, ease: "power1.inOut" }, "-=0.1")
			})
			showCount()
		})

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

		const passport = gsap.timeline({
			scrollTrigger: { trigger: "[data-passport]", start: "top 75%", once: true },
		})
		passport.from("[data-passport-page]", { rotationY: -165, transformOrigin: "left center", duration: 1, ease: "power3.inOut" })
		const rows = gsap.utils.toArray<HTMLElement>("[data-stamp-row]")
		gsap.set(rows, { autoAlpha: 0.25 })
		gsap.utils.toArray<HTMLElement>("[data-passport-stamp]").forEach((stamp, i) => {
			const tilt = parseFloat(stamp.dataset.passportStamp!)
			passport
				.fromTo(stamp,
					{ autoAlpha: 0, scale: 2.6, rotation: tilt - 18 },
					{ autoAlpha: 0.9, scale: 1, rotation: tilt, duration: 0.22, ease: "power4.in" },
					i ? "-=0.14" : "-=0.25")
				.to("[data-passport-body]", { keyframes: { y: [0, 5, -2, 0], scale: [1, 0.99, 1.003, 1] }, duration: 0.24, ease: "none" })
				.to(rows[i], { autoAlpha: 1, duration: 0 }, "<")
		})

		const tiers = gsap.timeline({
			scrollTrigger: { trigger: "[data-multipliers]", start: "top 75%", once: true },
		})
		gsap.utils.toArray<HTMLElement>("[data-multiplier-value]").forEach((el, i) => {
			const target = parseFloat(el.dataset.multiplierValue!)
			const n = { v: 0 }
			const at = i * 0.18
			tiers.from(el, { yPercent: 70, autoAlpha: 0, duration: 0.8, ease: "expo.out" }, at)
				.to(n, {
					v: target, duration: 0.9, ease: "power2.out",
					onUpdate: () => { el.textContent = `${n.v.toFixed(target % 1 ? 2 : 0)}×` },
				}, at)
		})
		const values = gsap.utils.toArray<HTMLElement>("[data-multiplier-value]")
		const last = values[values.length - 1]
		if (last) tiers.fromTo(last, { scale: 1 }, { scale: 1.08, duration: 0.14, yoyo: true, repeat: 1, ease: "power2.out" }, "-=0.05")

		gsap.utils.toArray<HTMLElement>("[data-rule]").forEach(el => {
			gsap.from(el, {
				scaleX: 0, transformOrigin: "left center", duration: 0.9, ease: "power3.out",
				scrollTrigger: { trigger: el, start: "top 90%", once: true },
			})
		})
	}, { scope: container })

	return (
		<div ref={container} className="min-w-screen min-h-screen -mt-[8.25rem]">
			<CornerHero
				title={<>Rewards every time <em>you eat!</em></>}
				subtext="Join for free and earn Passport Stamps every time you shop, because tasting the world should pay off."
				image="/EmpanadaPics/EzCaterer Menu/Empanadas by the Dozen.jpg"
				buttons={
					<a
						href="https://profile.squareup.com/merchantportal/ZYF2F37ACHYN0/loyalty"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block bg-[#bf8000] rounded-full px-6 py-3 md:px-8 md:py-4 font-mono font-semibold text-white tracking-wide text-xs md:text-sm uppercase shadow-lg border-2 border-black/20"
					>
						Check Stamp Balance
					</a>
				}
			/>

			<div className="bg-[#faf7f2] px-6 md:px-12 lg:px-20 py-14 md:py-20 lg:py-24">
				<div className="mx-auto grid max-w-[90rem] grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-[5fr_7fr] lg:content-center">
						<div data-reveal className="lg:col-start-1 lg:row-start-1 lg:self-end">
							<h2 className="mb-4 font-inter text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1a1209]">
								Earn Your <span className="italic text-[#D09501]">Stamps</span>
							</h2>
							<div data-rule className="mb-5 h-[2px] w-12 bg-[#bf8000]" />
							<p className="text-base md:text-lg lg:text-xl font-light tracking-wide text-[#64605b]">
								Every order, every birthday, every friend you bring along gets inked into your passport.
							</p>
						</div>
						<ul className="order-3 lg:order-none lg:col-start-1 lg:row-start-2 lg:self-start">
							{StampWays.map((stampWay) => (
								<li
									data-stamp-row
									key={stampWay.label}
									className="flex items-baseline gap-5 border-t border-[#1a1209]/10 py-3 first:border-t-0"
								>
									<span className="min-w-[3.5ch] font-inter text-2xl md:text-3xl font-black tracking-tight text-[#1a1209]">
										+{stampWay.stamps}
									</span>
									<span className="text-base md:text-lg text-[#5f5449]">{stampWay.description}</span>
								</li>
							))}
						</ul>

					<div data-passport aria-hidden="true" className="order-2 [perspective:2200px] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
						<svg className="absolute h-0 w-0">
							<filter id="stamp-ink">
								<feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="4" result="noise" />
								<feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" result="rough" />
								<feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.6 1.9" result="speckle" />
								<feComposite in="rough" in2="speckle" operator="in" />
							</filter>
						</svg>
						<div data-passport-body className="rounded-lg md:rounded-xl bg-[#6e2316] p-1.5 md:p-2.5">
							<div className="@container relative aspect-[1.42]">
								<div className="absolute inset-y-0 left-0 w-1/2 rounded-l-md" style={pageTexture}>
									<span className="absolute bottom-2 left-3 md:bottom-4 md:left-6 font-inter text-[10px] md:text-xs font-bold text-[#765600]/40">12</span>
								</div>
								<div data-passport-page className="absolute inset-y-0 right-0 w-1/2 rounded-r-md [backface-visibility:hidden]" style={pageTexture}>
									<span className="absolute right-3 top-2.5 md:right-6 md:top-5 font-inter text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#765600]/40">Stamps</span>
									<span className="absolute bottom-2 right-3 md:bottom-4 md:right-6 font-inter text-[10px] md:text-xs font-bold text-[#765600]/40">13</span>
								</div>
								<div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-[#1a1209]/10" />
								{StampWays.map((stampWay) => (
									<PassportStamp key={stampWay.label} stampWay={stampWay} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div data-route-section className="bg-[#0d0c0b] px-6 md:px-12 lg:px-20 py-14 md:py-20">
				<div className="mx-auto max-w-[90rem]">
					<div data-reveal className="mx-auto mb-6 max-w-3xl text-center">
						<p className="mb-4 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
							Redemption
						</p>
						<h2 className="mb-4 font-inter text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[#faf7f2]">
							Cash in your <span className="italic text-[#fec32f]">stamps.</span>
						</h2>
						<div data-rule className="mx-auto mb-5 h-[2px] w-12 bg-[#fec32f]" />
						<p className="text-base md:text-lg lg:text-xl font-light tracking-wide text-white/60">
							Stamps stack up automatically. Every stop on the route is a reward you can claim.
						</p>
					</div>

					{/* Phones and tablets: the route runs top to bottom, one leg per stop */}
					<ol data-route-v className="mx-auto mt-10 max-w-xl xl:hidden">
						{RewardsTiers.map((tier, i) => (
							<li data-route-v-stop key={tier.stamps} className="relative flex items-start gap-5 pb-8 last:pb-0">
								{i < RewardsTiers.length - 1 && (
									<span data-route-v-leg className="absolute left-[2.6rem] top-[5.25rem] bottom-0 border-l-[3px] border-dotted border-[#fec32f] md:left-[3.35rem] md:top-[6.75rem]" />
								)}
								<img
									src={tier.image}
									alt={tier.reward}
									className="relative h-[5.25rem] w-[5.25rem] shrink-0 rounded-full border-4 border-[#fec32f] object-cover md:h-[6.75rem] md:w-[6.75rem]"
								/>
								<div className="pt-2">
									<p data-route-v-text className="font-inter text-3xl md:text-4xl font-black leading-none tracking-tight text-[#fec32f]">{tier.stamps}</p>
									<h3 data-route-v-text className="mt-1.5 font-inter text-lg md:text-xl font-black tracking-tight text-[#faf7f2]">{tier.reward}</h3>
									<p data-route-v-text className="mt-0.5 text-sm font-light leading-snug text-white/60">{tier.description}</p>
								</div>
							</li>
						))}
					</ol>
					<div className="mx-auto mt-10 max-w-xl text-right xl:hidden">
						<p data-route-count-v className="font-inter text-6xl font-black leading-none tracking-tight text-[#fec32f] tabular-nums">
							550
						</p>
						<p className="mt-2 font-mono text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
							Stamps collected
						</p>
					</div>

					<div className="relative mx-auto hidden aspect-[1000/420] max-w-[75rem] xl:block">
						<svg viewBox="0 0 1000 420" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
							<defs>
								<mask id="route-mask" maskUnits="userSpaceOnUse" x="-50" y="-50" width="1100" height="520">
									<path data-route-draw d={ROUTE} fill="none" stroke="white" strokeWidth="14" />
								</mask>
							</defs>
							<path d={ROUTE} fill="none" stroke="#fec32f" strokeOpacity="0.15" strokeWidth="3" strokeDasharray="2 12" strokeLinecap="round" />
							<path id="route-path" d={ROUTE} fill="none" stroke="#fec32f" strokeWidth="3" strokeDasharray="2 12" strokeLinecap="round" mask="url(#route-mask)" />
							<g data-route-plane transform="translate(1000 60)">
								<circle r="16" fill="#fec32f" fillOpacity="0.2" />
								<circle r="7" fill="#fec32f" />
							</g>
						</svg>
						{RewardsTiers.map((tier, i) => (
							<RouteStop
								key={tier.stamps}
								tier={tier}
								x={ROUTE_STOPS[i][0] / 10}
								y={(ROUTE_STOPS[i][1] / 420) * 100}
							/>
						))}
						<div className="absolute bottom-0 right-0 text-right">
							<p data-route-count className="font-inter text-7xl font-black leading-none tracking-tight text-[#fec32f] tabular-nums">
								550
							</p>
							<p className="mt-2 font-mono text-xs font-black uppercase tracking-[0.3em] text-white/50">
								Stamps collected
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-[#faf7f2] px-6 md:px-12 lg:px-20 py-14 md:py-20 lg:py-24">
				<div className="mx-auto flex max-w-[90rem] flex-col gap-12 min-[1400px]:flex-row min-[1400px]:items-end min-[1400px]:justify-between min-[1400px]:gap-16">
					<div data-reveal className="max-w-lg min-[1400px]:self-start">
						<p className="mb-4 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Membership
						</p>
						<h2 className="mb-4 font-inter text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Level up your <span className="italic text-[#D09501]">passport.</span>
						</h2>
						<div data-rule className="mb-5 h-[2px] w-12 bg-[#bf8000]" />
						<p className="text-base md:text-lg lg:text-xl font-light tracking-wide text-[#64605b]">
							Stack more stamps on every order — the more you visit, the faster they pile up.
						</p>
					</div>

					{/* --multiplier-unit is the size of 1×; each tier is drawn at value × unit */}
					<div data-multipliers className="flex flex-col items-start gap-8 [--multiplier-unit:3.5rem] md:flex-row md:items-end md:gap-10 lg:self-end md:[--multiplier-unit:4.5rem] min-[1400px]:gap-14 min-[1400px]:[--multiplier-unit:6rem]">
						{MembershipTiers.map((tier, i) => (
							<TierMultiplier key={tier.name} tier={tier} highlight={i === MembershipTiers.length - 1} />
						))}
					</div>
				</div>
			</div>

			<div className="bg-[#faf7f2] px-6 md:px-12 lg:px-20 py-14 md:py-20 lg:py-24">
				<div className="mx-auto max-w-3xl text-center">
					<h2 data-reveal className="mb-4 font-inter text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
						Ready to start your <span className="italic text-[#D09501]">passport?</span>
					</h2>
					<div data-rule className="mx-auto mb-5 h-[2px] w-12 bg-[#bf8000]" />
					<p data-reveal className="mb-8 md:mb-10 text-base md:text-lg lg:text-xl font-light tracking-wide text-[#64605b]">
						Sign up today and the next bite already counts.
					</p>

					<div data-reveal className="flex flex-row items-center justify-center gap-3">
						<a href="https://profile.squareup.com/merchantportal/ZYF2F37ACHYN0/loyalty" target="_blank" rel="noopener noreferrer">
							<button
								type="button"
								className="rounded-full border-2 border-black/20 bg-[#fec32f] px-6 py-3 md:px-8 md:py-4 font-mono text-xs md:text-sm font-semibold uppercase tracking-wide text-[#1a1209] shadow-lg"
							>
								Join Now
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rewards;
