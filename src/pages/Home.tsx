import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReviewCard from "../components/ReviewCard";
import EmpandaCarousel from "../components/EmpanadaCarousel";
import Reviews from "../data/Reviews";

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Home = () => {
	const [currentReviews, setCurrentReviews] = useState<number[]>([0,1,2])
	const navigate = useNavigate()

	const container = useRef<HTMLDivElement>(null)
	const countRef = useRef<HTMLSpanElement>(null)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentReviews(empanadas => empanadas.map(index => (index+1+Reviews.length)%Reviews.length))
		}, 3000)

		return () => clearInterval(interval)
	}, [])

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

		gsap.to("[data-spin]", { rotation: 360, repeat: -1, duration: 40, ease: "none" })

		gsap.from("[data-stars] img", {
			scale: 0, autoAlpha: 0, duration: 0.5, ease: "back.out(1.7)", stagger: 0.1,
			scrollTrigger: { trigger: "[data-stars]", start: "top 85%", once: true },
		})

		if (countRef.current) {
			const span = countRef.current
			const obj = { v: 0 }
			gsap.to(obj, {
				v: 400, duration: 2, ease: "power1.out", snap: { v: 1 },
				scrollTrigger: { trigger: span, start: "top 85%", once: true },
				onUpdate: () => { span.textContent = obj.v + "+" },
			})
		}
	}, { scope: container })

	return (
		<div ref={container} className="min-w-screen min-h-screen -mt-[8.25rem]">
			<div className="relative flex items-center justify-start overflow-hidden">
				<img
					data-parallax
					src='/EmpanadaPics/EzCaterer Menu/Full Menu.jpg'
					className='z-0 w-full h-full object-cover'
					style={{ width: '100vw', height: 'calc(100vh + 2.25rem)' }}
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
				<div className="hidden lg:block absolute top-0 bottom-0 left-[44%] w-px bg-[#1a1209]/15 z-10" />
				<div className="absolute text-left ml-6 md:ml-12 lg:ml-16 z-20 max-w-md md:max-w-xl lg:max-w-2xl">
					<h1 data-reveal className="text-4xl md:text-6xl lg:text-8xl uppercase font-inter font-black mb-6 scale-y-[1.1] tracking-wide leading-[0.9] text-[#1a1209]">
						your freezer's <br />
						<span className="italic text-[#D09501]">new best friend</span>
					</h1>
					<div data-reveal className="w-12 h-[2px] bg-[#bf8000] mb-6" />
					<p data-reveal className="font-mono text-sm md:text-base font-medium text-slate-600 tracking-wide mb-6">
						The Only Box That Takes You Around the World in 5 Bites.
					</p>
					<div data-reveal className="flex flex-col md:flex-row gap-3 items-start md:items-center">
						<button
							type="button"
							onClick={() => navigate('OrderPickup')}
							className="bg-[#bf8000] rounded-full px-6 md:px-8 py-3 md:py-4 font-mono font-semibold text-white tracking-wide text-xs md:text-sm uppercase shadow-lg border-2 border-black/20"
						>
							Order Pickup
						</button>
						<button
							type="button"
							onClick={() => navigate('ShipNationwide')}
							className="bg-white rounded-full px-6 md:px-8 py-3 md:py-4 font-mono font-semibold text-[#bf8000] tracking-wide text-xs md:text-sm uppercase shadow-md border-2 border-[#bf8000]/30"
						>
							Ship Nationwide
						</button>
					</div>
				</div>
			</div>

			<div className="relative flex items-center justify-end min-h-[70vh] md:min-h-[80vh] lg:min-h-screen overflow-hidden">
				<video
					data-parallax
					className="absolute inset-0 w-full h-full object-cover"
					autoPlay
					loop
					muted
					playsInline
				>
					<source src="/empanadabroll.mp4" type="video/mp4" />
				</video>

				<div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent z-10" />

				<div className="absolute text-right text-white mr-6 md:mr-12 lg:mr-16 z-20">
					<h1 className="text-5xl md:text-7xl lg:text-9xl uppercase font-inter font-black mb-8 leading-[0.85] tracking-wide">
						<span data-reveal className="block">flavors</span>
						<span data-reveal className="block">without</span>
						<span data-reveal className="block">borders</span>
					</h1>
					<div data-reveal className="w-20 h-[2px] bg-[#bf8000] mb-6 inline-block" />
					<p data-reveal className="font-mono text-base md:text-lg lg:text-xl font-semibold text-[#fec32f]">
						We did the traveling so you don't have to.
					</p>
				</div>
			</div>

			<EmpandaCarousel />

			<div className="bg-black/10 flex flex-col md:flex-row md:justify-between items-center min-h-screen gap-12 md:gap-0 px-6 md:px-16 lg:px-28 py-16 md:py-0">
				<div className="flex flex-col">
					<h1 data-reveal className="text-5xl md:text-6xl lg:text-8xl uppercase font-inter font-black mb-8 leading-[0.9] tracking-wide">
						join the <br />
						<span className="tracking-tighter font-inter text-red-600">world tour</span>
					</h1>
					<div className="flex flex-col gap-6 mb-4">
						<div data-reveal className="flex flex-row gap-4">
							<div className="bg-[#fcc22e] rounded-full h-16 w-16 p-5">
								<img src="/icons/world.svg" className="w-full h-full"/>
							</div>
							<div className="flex flex-col items-left justify-center">
								<h2 className="font-black tracking-wide text-lg font-mono">Collect Stamps</h2>
								<p className="font-mono text-sm font-medium">Earn a digital stamp for every new flavor you try!</p>
							</div>
						</div>
						<div data-reveal className="flex flex-row gap-4">
							<div className="bg-[#fcc22e] rounded-full h-16 w-16 p-5">
								<img src="/icons/gift.svg" className="w-full h-full"/>
							</div>
							<div className="flex flex-col items-left justify-center">
								<h2 className="font-black tracking-wide text-lg font-mono">Earn Rewards</h2>
								<p className="font-mono text-sm font-medium">A full passport earns you a free box of favorites!</p>
							</div>
						</div>
						<button
							data-reveal
							type="button"
							onClick={() => navigate('Rewards')}
							className="bg-[#fec32f] font-mono inline-block rounded-full px-8 py-4 font-semibold text-black tracking-wide"
						>
							Claim Your Rewards →
						</button>
					</div>
				</div>
				<div data-reveal className="relative h-[70vw] w-[70vw] md:h-[40vw] md:w-[40vw] lg:h-[35vw] lg:w-[35vw] flex items-center justify-center">
					<div data-spin className="absolute border border-gray-600/50 border-3 border-dashed w-full h-full rounded-full"/>
					<div className="h-[95%] w-[95%] overflow-hidden rounded-full border-4 border-white/80 shadow-xl">
						<img src="/stamps.jpg" className="h-full w-full object-cover" />
					</div>
				</div>
			</div>

			<div className="relative min-h-screen flex items-center overflow-hidden">
				<img
					data-parallax
					src="/EmpanadaPics/EzCaterer Menu/Office Empanada Box - 20 Ppl.jpg"
					className="absolute inset-0 z-0 h-full w-full object-cover"
				/>
				<div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
				<div className="relative z-20 ml-6 md:ml-12 lg:ml-20 max-w-md md:max-w-xl lg:max-w-3xl">
					<p data-reveal className="font-mono text-xs md:text-sm font-black uppercase tracking-[0.3em] text-[#fec32f] mb-8">
						Subscribe
					</p>
					<h2 data-reveal className="font-inter font-black uppercase scale-y-[1.05] tracking-tight leading-[0.85] text-white text-5xl md:text-7xl lg:text-8xl mb-8">
						Never have an <br />
						<span className="italic text-[#fec32f]">empty freezer.</span>
					</h2>
					<div data-reveal className="h-[2px] w-12 bg-[#fec32f] mb-8" />
					<div data-reveal className="mb-12 flex flex-col gap-3 font-mono text-base md:text-lg text-white/85">
						<p>Save 10% on every order.</p>
						<p>Free shipping every time.</p>
						<p>Skip, pause, or cancel anytime.</p>
					</div>
					<button
						data-reveal
						type="button"
						onClick={() => navigate('ShipNationwide')}
						className="bg-[#fec32f] rounded-full px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 font-semibold text-black tracking-wide text-xs md:text-sm lg:text-base uppercase shadow-md"
					>
						Start Your Subscription →
					</button>
				</div>
			</div>

			<div className="flex min-h-screen flex-col items-center justify-center gap-8 md:gap-12 bg-[#faf7f2] py-16 md:py-0">
				<div data-stars className="flex flex-row gap-2 md:gap-3 lg:gap-4 justify-center">
					{Array.from({ length: 5 }).map((_, index) => (
						<img key={`star-${index}`} src="/star.svg" alt="" className="h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20" />
					))}
				</div>

				<div data-reveal className="text-center px-6">
					<h2 className="-mt-4 mb-3 font-inter text-2xl md:text-3xl lg:text-4xl font-black tracking-tight">
						Over <span ref={countRef}>400+</span> five-star reviews
					</h2>
					<p className="font-mono text-sm md:text-base lg:text-lg text-gray-600/80">
						On Google and Yelp — see why travelers and locals keep coming back.
					</p>
				</div>

				<div className="flex w-full px-6 md:px-16 lg:px-48 flex-row items-stretch justify-center gap-6">
					<div data-reveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{currentReviews.map((index) => (
							<ReviewCard key={`${Reviews[index].name}-${index}`} review={Reviews[index]} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;
