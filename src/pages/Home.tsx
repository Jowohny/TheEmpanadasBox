import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import EmpanadaCard from "../components/EmpanadaCard";
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
				<div className="absolute text-left ml-16 z-20 max-w-2xl">
					<h1 className="text-8xl uppercase font-inter font-black mb-6 scale-y-[1.1] tracking-wide leading-[0.9] text-[#1a1209]">
						your freezer's <br />
						<span className="italic text-[#D09501]">new best friend</span>
					</h1>
					<div className="w-12 h-[2px] bg-[#bf8000] mb-6" />
					<p className="font-mono text-base font-medium text-slate-600 tracking-wide mb-6">
						The Only Box That Takes You Around the World in 5 Bites.
					</p>
					<div className="flex flex-row gap-3 items-center">
						<button
							type="button"
							onClick={() => navigate('OrderPickup')}
							className="bg-[#bf8000] rounded-full px-8 py-4 font-mono font-semibold text-white tracking-wide text-sm uppercase shadow-lg border-2 border-black/20"
						>
							Order Pickup
						</button>
						<button
							type="button"
							onClick={() => navigate('ShipNationwide')}
							className="bg-white rounded-full px-8 py-4 font-mono font-semibold text-[#bf8000] tracking-wide text-sm uppercase shadow-md border-2 border-[#bf8000]/30"
						>
							Ship Nationwide
						</button>
					</div>
				</div>
			</div>

			<div className="relative flex items-center justify-end">
				<video 
					style={{
						width: '100vw',
						height: 'auto'
					}}
					autoPlay 
					loop 
					muted 
					playsInline
				>
					<source src="/empanadabroll.mp4" type="video/mp4" />
				</video>

				<div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent z-10" />

				<div className="absolute text-right text-white mr-16 z-20">
					<h1 className="text-9xl uppercase font-inter font-black mb-8 leading-[0.85] tracking-wide">
						flavors <br /> without <br /> borders
					</h1>
					<div className="w-20 h-[2px] bg-[#bf8000] mb-6 inline-block" />
					<p className="font-mono text-xl font-semibold text-[#fec32f]">
						We did the traveling so you don't have to.
					</p>				
				</div>
			</div>

			<div className="bg-[#faf7f2] p-8 min-h-screen">
				<div className="flex flex-row w-full justify-between px-12 py-10 items-center border-b border-[#e8dfd0]">
					<div className="flex flex-col gap-1">
						<h1 className="text-6xl tracking-wide font-black font-inter text-[#1a1209] leading-none">The World Tour</h1>
						<p className="text-xl font-light tracking-wide text-[#7a6a55] mt-1">Pick your destinations for the ultimate 12-pack.</p>
					</div>
					<button 
						type="button"
						onClick={() => navigate('ShipNationwide')} 
						className="bg-[#bf8000] inline-block rounded-full px-8 py-4 font-medium text-white tracking-wide text-sm uppercase shadow-md"
					>
						Build Your 12 Pack
					</button>
				</div>
				<div className="flex flex-row justify-center items-center gap-6 px-8 py-14">
					<button onClick={useNextEmpanadas} type="button" className="w-12 h-12 flex items-center justify-center rounded-full border border-[#d9cfc0] bg-white text-[#7a6a55] text-xl shrink-0">←</button>
					{currentEmpanadas.map((index) => (
						<EmpanadaCard key={`empanada-${index}`} empanada={Empanadas[index]} />
					))}
					<button onClick={usePreviousEmpanadas} type="button" className="w-12 h-12 flex items-center justify-center rounded-full border border-[#d9cfc0] bg-white text-[#7a6a55] text-xl shrink-0">→</button>
				</div>
			</div>

			<div className="bg-black/10 flex justify-between items-center min-h-screen px-28">
				<div className="flex flex-col">
					<h1 className="text-8xl uppercase font-inter font-black mb-8 leading-[0.9] tracking-wide">
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
				<div className="relative h-[35vw] w-[35vw] flex items-center justify-center">
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
				<div className="relative z-20 m-16 p-10 rounded-3xl border border-white/20 bg-black/30 shadow-2xl backdrop-blur-md max-w-4xl">
					<p className="font-mono text-xs font-medium tracking-[0.25em] uppercase text-[#fec32f] mb-6">Subscription Plan</p>
					<h1 className="font-inter font-black uppercase leading-[0.83] tracking-wide text-white text-8xl mb-10">
						Never have an <br />
						<span className="text-[#fec32f] italic">empty freezer</span> <br />
						<span className="text-[17rem] leading-[0.75] tracking-tighter">again</span>
					</h1>
					<div className="w-16 h-[2px] bg-[#fec32f] mb-6" />
					<p className="font-mono text-lg font-medium tracking-wide text-white/80 mb-8">Subscribe and Save 10% on every order.</p>
					<div className="flex flex-row items-center gap-6">
						<button 
							type="button"
							onClick={() => navigate('ShipNationwide')} 
							className="bg-[#fec32f] font-mono inline-block rounded-full px-8 py-4 font-semibold text-black tracking-wide"
						>
							Build Your Subscription →
						</button>
						<div className="flex flex-row items-center gap-3 border-l border-white/20 pl-6">
							<div className="flex flex-col leading-snug">
								<h2 className="text-sm text-white font-semibold tracking-wide">Free Shipping</h2>
								<p className="text-sm text-gray-400 font-mono">on all subscription orders</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-[#faf7f2]">
				<div className="flex flex-row gap-4 justify-center">
					{Array.from({ length: 5 }).map((_, index) => (
						<img key={`star-${index}`} src="/star.svg" alt="" className="h-20 w-20" />
					))}
				</div>

				<div className="text-center">
					<h2 className="-mt-4 mb-3 font-inter text-4xl font-black tracking-tight">
						Over 400+ five-star reviews
					</h2>
					<p className="font-mono text-lg text-gray-600/80">
						On Google and Yelp — see why travelers and locals keep coming back.
					</p>
				</div>

				<div className="flex w-full px-48 flex-row items-stretch justify-center gap-6">
					<div className="grid grid-cols-3 gap-6">
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