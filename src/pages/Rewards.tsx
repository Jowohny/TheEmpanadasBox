import MembershipTierCard from "../components/MembershipTierCard";
import StampWayCard from "../components/StampWayCard";
import TierCard from "../components/TierCard";
import MembershipTiers from "../data/MembershipTiers";
import RewardsTiers from "../data/RewardsTiers";
import StampWays from "../data/StampWays";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Rewards = () => {
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

		gsap.from("[data-stamp]", {
			autoAlpha: 0, y: 40, duration: 0.9, ease: "power3.out",
			stagger: { grid: [1, 5], from: "edges", amount: 0.5 },
			scrollTrigger: { trigger: "[data-stamp-grid]", start: "top 85%", once: true },
		})

		gsap.utils.toArray<HTMLElement>("[data-rule]").forEach(el => {
			gsap.from(el, {
				scaleX: 0, transformOrigin: "left center", duration: 0.9, ease: "power3.out",
				scrollTrigger: { trigger: el, start: "top 90%", once: true },
			})
		})
	}, { scope: container })

	return (
		<div ref={container} className="min-w-screen min-h-screen -mt-[8.25rem]">
			<div className="relative flex items-center justify-start overflow-hidden">
				<img
					data-parallax
					src="/EmpanadaPics/EzCaterer Menu/Empanadas by the Dozen.jpg"
					className="z-0 object-cover"
					style={{ width: '100vw', height: 'calc(100vh + 2.25rem)' }}
				/>
				<div className="absolute inset-y-0 left-0 bg-white lg:bg-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/95 lg:to-transparent lg:w-[70%] z-10" />

				<div className="absolute z-20 ml-16 max-w-3xl text-left">
					<p data-reveal className="mb-6 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
						Loyalty Program
					</p>
					<h1 data-reveal className="font-inter font-black uppercase text-8xl scale-y-[1.05] leading-[0.85] tracking-wide text-[#1a1209] mb-6">
						Rewards <br />
						every time <br />
						<span className="italic text-[#D09501]">you eat!</span>
					</h1>
					<div data-reveal className="h-[2px] w-12 bg-[#bf8000] mb-6" />
					<p data-reveal className="font-mono text-base font-semibold tracking-wide text-slate-800 mb-8">
						Join for free and earn Passport Stamps every time you <br />
						shop because tasting the world should pay off.
					</p>
					<div data-reveal className="flex flex-row items-center gap-3">
						<a href="https://profile.squareup.com/merchantportal/ZYF2F37ACHYN0/loyalty" target="_blank" rel="noopener noreferrer">
							<button
								type="button"
								className="bg-[#bf8000] rounded-full px-8 py-4 font-mono font-semibold text-white tracking-wide text-sm uppercase shadow-lg border-2 border-black/20"
							>
								Check Stamp Balance
							</button>
						</a>
					</div>
				</div>
			</div>

			<div className="bg-[#faf7f2] px-20 py-24">
				<div className="mx-auto max-w-[90rem]">
					<div data-reveal className="mx-auto mb-16 text-center">
						<h2 className="font-inter text-6xl font-black tracking-tight text-[#1a1209] mb-4">
							Earn Your <span className="italic text-[#D09501]">Stamps</span>
						</h2>
						<div data-rule className="mx-auto mb-5 h-[2px] w-12 bg-[#bf8000]" />
						</div>
					<div data-stamp-grid className="grid grid-cols-5 items-start gap-6">
						{StampWays.map((stampWay) => (
							<StampWayCard key={stampWay.stamps + stampWay.category} stampWay={stampWay} />
						))}
					</div>
				</div>
			</div>

			<div className="bg-[#0d0c0b] px-20 py-24">
				<div className="mx-auto max-w-[90rem]">
					<div data-reveal className="mx-auto mb-16 max-w-3xl text-center">
						<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
							Redemption
						</p>
						<h2 className="mb-4 font-inter text-6xl font-black leading-[0.95] tracking-tight text-[#faf7f2]">
							Cash in your <span className="italic text-[#fec32f]">stamps.</span>
						</h2>
						<div data-rule className="mx-auto mb-5 h-[2px] w-12 bg-[#fec32f]" />
						<p className="text-xl font-light tracking-wide text-white/60">
							Stamps stack up automatically. When you hit a tier, it's yours to claim.
						</p>
					</div>

					<div className="grid grid-cols-4 gap-6">
						{RewardsTiers.map((tier) => (
							<TierCard key={tier.stamps} tier={tier} />
						))}
					</div>
				</div>
			</div>

			<div className="bg-[#faf7f2] px-20 py-24">
				<div className="mx-auto max-w-[90rem]">
					<div data-reveal className="mx-auto mb-16 max-w-3xl text-center">
						<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Membership
						</p>
						<h2 className="mb-4 font-inter text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Level up your <span className="italic text-[#D09501]">passport.</span>
						</h2>
						<div data-rule className="mx-auto mb-5 h-[2px] w-12 bg-[#bf8000]" />
						<p className="text-xl font-light tracking-wide text-[#64605b]">
							Stack more stamps on every order — the more you visit, the faster they pile up.
						</p>
					</div>

					<div className="grid grid-cols-3 gap-6">
						{MembershipTiers.map((tier) => (
							<MembershipTierCard key={tier.name} tier={tier} />
						))}
					</div>
				</div>
			</div>

			<div className="bg-[#faf7f2] px-20 py-24">
				<div className="mx-auto max-w-3xl text-center">
					<h2 data-reveal className="mb-4 font-inter text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
						Ready to start your <span className="italic text-[#D09501]">passport?</span>
					</h2>
					<div data-rule className="mx-auto mb-5 h-[2px] w-12 bg-[#bf8000]" />
					<p data-reveal className="mb-10 text-xl font-light tracking-wide text-[#64605b]">
						Sign up today and the next bite already counts.
					</p>

					<div data-reveal className="flex flex-row items-center justify-center gap-3">
						<a href="https://profile.squareup.com/merchantportal/ZYF2F37ACHYN0/loyalty" target="_blank" rel="noopener noreferrer">
							<button
								type="button"
								className="rounded-full border-2 border-black/20 bg-[#fec32f] px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wide text-[#1a1209] shadow-lg"
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
