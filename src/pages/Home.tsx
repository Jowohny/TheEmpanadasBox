import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import Empanadas from "../data/Empanadas";
import Reviews from "../data/Reviews";

const Home = () => {
	const [currentEmpanadas, setCurrentEmpanadas] = useState<number[]>([0,1,2])
	const [currentReviews, setCurrentReviews] = useState<number[]>([0,1,2])
	const navigate = useNavigate()

	const useNextEmpanadas = () => {
		setCurrentEmpanadas(currentEmpanadas.map(index => (index-1+Empanadas.length) % Empanadas.length))
	}

	const usePreviousEmpanadas = () => {
		setCurrentEmpanadas(currentEmpanadas.map(index => (index+1+Empanadas.length)%Empanadas.length))
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentReviews(empanadas => empanadas.map(index => (index+1+Reviews.length)%Reviews.length))
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className="min-w-screen min-h-screen -mt-[8.25rem]">
			<div className="relative flex items-center justify-start">
				<img
					src='/EmpanadaPics/EzCaterer Menu/Full Menu.jpg'
					className='z-0 w-full h-full object-cover'
					style={{ width: '100vw', height: 'calc(100vh + 2.25rem)' }}
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
				<div className="hidden lg:block absolute top-0 bottom-0 left-[44%] w-px bg-[#1a1209]/15 z-10" />
				<div className="absolute text-left ml-6 md:ml-12 lg:ml-16 z-20 max-w-md md:max-w-xl lg:max-w-2xl">
					<h1 className="text-4xl md:text-6xl lg:text-8xl uppercase font-inter font-black mb-6 scale-y-[1.1] tracking-wide leading-[0.9] text-[#1a1209]">
						your freezer's <br />
						<span className="italic text-[#D09501]">new best friend</span>
					</h1>
					<div className="w-12 h-[2px] bg-[#bf8000] mb-6" />
					<p className="font-mono text-sm md:text-base font-medium text-slate-600 tracking-wide mb-6">
						The Only Box That Takes You Around the World in 5 Bites.
					</p>
					<div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
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
						flavors <br /> without <br /> borders
					</h1>
					<div className="w-20 h-[2px] bg-[#bf8000] mb-6 inline-block" />
					<p className="font-mono text-base md:text-lg lg:text-xl font-semibold text-[#fec32f]">
						We did the traveling so you don't have to.
					</p>
				</div>
			</div>

			{(() => {
				const prev = Empanadas[currentEmpanadas[0]]
				const active = Empanadas[currentEmpanadas[1]]
				const next = Empanadas[currentEmpanadas[2]]
				const counter = String(currentEmpanadas[1] + 1).padStart(2, '0')
				const total = String(Empanadas.length).padStart(2, '0')
				const tagline = active.description.split(', ').join(' · ')
				return (
					<div className="bg-[#faf7f2] min-h-[80vh] lg:h-[95vh] flex flex-col px-6 md:px-12 lg:px-20 py-10">
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
								<img src={active.image} alt={active.name} className="h-full w-full object-cover" />
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
							<h2 className="font-inter text-4xl md:text-7xl lg:text-9xl font-black uppercase scale-y-[1.05] tracking-tight leading-[0.85] text-[#1a1209]">
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
			})()}

			<div className="bg-black/10 flex flex-col md:flex-row md:justify-between items-center min-h-screen gap-12 md:gap-0 px-6 md:px-16 lg:px-28 py-16 md:py-0">
				<div className="flex flex-col">
					<h1 className="text-5xl md:text-6xl lg:text-8xl uppercase font-inter font-black mb-8 leading-[0.9] tracking-wide">
						join the <br />
						<span className="tracking-tighter font-inter text-red-600">world tour</span>
					</h1>
					<div className="flex flex-col gap-6 mb-4">
						<div className="flex flex-row gap-4">
							<div className="bg-[#fcc22e] rounded-full h-16 w-16 p-5">
								<img src="/icons/world.svg" className="w-full h-full"/>
							</div>
							<div className="flex flex-col items-left justify-center">
								<h2 className="font-black tracking-wide text-lg font-mono">Collect Stamps</h2>
								<p className="font-mono text-sm font-medium">Earn a digital stamp for every new flavor you try!</p>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<div className="bg-[#fcc22e] rounded-full h-16 w-16 p-5">
								<img src="/icons/gift.svg" className="w-full h-full"/>
							</div>
							<div className="flex flex-col items-left justify-center">
								<h2 className="font-black tracking-wide text-lg font-mono">Earn Rewards</h2>
								<p className="font-mono text-sm font-medium">A full passport earns you a free box of favorites!</p>
							</div>
						</div>
						<button 
							type="button"
							onClick={() => navigate('Rewards')} 
							className="bg-[#fec32f] font-mono inline-block rounded-full px-8 py-4 font-semibold text-black tracking-wide inline-block"
						>
							Claim Your Rewards →
						</button>
					</div>
				</div>
				<div className="relative h-[70vw] w-[70vw] md:h-[40vw] md:w-[40vw] lg:h-[35vw] lg:w-[35vw] flex items-center justify-center">
					<div className="absolute border border-gray-600/50 border-3 border-dashed w-full h-full rounded-full"/>
					<div className="h-[95%] w-[95%] overflow-hidden rounded-full border-4 border-white/80 shadow-xl">
						<img src="/stamps.jpg" className="h-full w-full object-cover" />
					</div>
				</div>
			</div>

			<div className="relative min-h-screen flex items-center overflow-hidden">
				<img
					src="/EmpanadaPics/EzCaterer Menu/Office Empanada Box - 20 Ppl.jpg"
					className="absolute inset-0 z-0 h-full w-full object-cover"
				/>
				<div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
				<div className="relative z-20 ml-6 md:ml-12 lg:ml-20 max-w-md md:max-w-xl lg:max-w-3xl">
					<p className="font-mono text-xs md:text-sm font-black uppercase tracking-[0.3em] text-[#fec32f] mb-8">
						Subscribe
					</p>
					<h2 className="font-inter font-black uppercase scale-y-[1.05] tracking-tight leading-[0.85] text-white text-5xl md:text-7xl lg:text-8xl mb-8">
						Never have an <br />
						<span className="italic text-[#fec32f]">empty freezer.</span>
					</h2>
					<div className="h-[2px] w-12 bg-[#fec32f] mb-8" />
					<div className="mb-12 flex flex-col gap-3 font-mono text-base md:text-lg text-white/85">
						<p>Save 10% on every order.</p>
						<p>Free shipping every time.</p>
						<p>Skip, pause, or cancel anytime.</p>
					</div>
					<button
						type="button"
						onClick={() => navigate('ShipNationwide')}
						className="bg-[#fec32f] rounded-full px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 font-semibold text-black tracking-wide text-xs md:text-sm lg:text-base uppercase shadow-md"
					>
						Start Your Subscription →
					</button>
				</div>
			</div>

			<div className="flex min-h-screen flex-col items-center justify-center gap-8 md:gap-12 bg-[#faf7f2] py-16 md:py-0">
				<div className="flex flex-row gap-2 md:gap-3 lg:gap-4 justify-center">
					{Array.from({ length: 5 }).map((_, index) => (
						<img key={`star-${index}`} src="/star.svg" alt="" className="h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20" />
					))}
				</div>

				<div className="text-center px-6">
					<h2 className="-mt-4 mb-3 font-inter text-2xl md:text-3xl lg:text-4xl font-black tracking-tight">
						Over 400+ five-star reviews
					</h2>
					<p className="font-mono text-sm md:text-base lg:text-lg text-gray-600/80">
						On Google and Yelp — see why travelers and locals keep coming back.
					</p>
				</div>

				<div className="flex w-full px-6 md:px-16 lg:px-48 flex-row items-stretch justify-center gap-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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