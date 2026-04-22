import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate()

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
		</div>
	)
}

export default Home;