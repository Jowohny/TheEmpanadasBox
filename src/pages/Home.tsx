import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const [currentDisplay, setCurrentDisplay] = useState<number[]>([0,1,2])
	const navigate = useNavigate()

	const useNext = () => {
		setCurrentDisplay(currentDisplay.map(index => (index-1)%empanadaFlavors.length))
	}

	const usePrevious = () => {
		setCurrentDisplay(currentDisplay.map(index => (index+1+empanadaFlavors.length)%empanadaFlavors.length))
	}

	const empanadaFlavors = [
		{
			name: 'Buenos Aires',
			image: '/EmpanadaPics/Items Photos/BUENOS AIRES.jpg',
			description: 'Ground beef, onion, bell pepper, green onion',
			tags: ['beef']
		},
		{
			name: 'Bordeaux',
			image: '/EmpanadaPics/Items Photos/BORDEAUX.jpg',
			description: 'Red wine braised short rib, bell pepper, tomato',
			tags: ['beef']
		},
		{
			name: 'Capri',
			image: '/EmpanadaPics/Items Photos/CAPRI.jpg',
			description: 'Tomato, mozzarella, parmesan, fresh basil, oregano',
			tags: ['vegetarian']
		},
		{
			name: 'Chicago',
			image: '/EmpanadaPics/Items Photos/CHICAGO.jpg',
			description: 'Pepperoni, mozzarella, oregano',
			tags: ['pork']
		},
		{
			name: 'Jamaica',
			image: '/EmpanadaPics/Items Photos/JAMAICA.jpg',
			description: 'Jerk chicken, green onion',
			tags: ['chicken', 'spicy']
		},
		{
			name: 'Louisiana',
			image: '/EmpanadaPics/Items Photos/LOUISIANA.jpg',
			description: 'Cajun corn, onion, bell pepper, vegan cheese, green onion',
			tags: ['vegan', 'spicy']
		},
		{
			name: 'Miami',
			image: '/EmpanadaPics/Items Photos/MIAMI.jpg',
			description: 'Marinated pork, swiss cheese, pickles, mustard',
			tags: ['pork']
		},
		{
			name: 'Mumbai',
			image: '/EmpanadaPics/Items Photos/MUMBAI.jpg',
			description: 'Potato & pea samosa',
			tags: ['vegan', 'spicy']
		},
		{
			name: 'New England',
			image: '/EmpanadaPics/Items Photos/NEW ENGLAND.jpg',
			description: 'Chicken breast, onion, carrot, green pea, bechamel',
			tags: ['chicken']
		},
		{
			name: 'Philly',
			image: '/EmpanadaPics/Items Photos/PHILLY.jpg',
			description: 'Steak, onion, bell pepper, provolone',
			tags: ['beef']
		},
		{
			name: 'Singapore',
			image: '/EmpanadaPics/Items Photos/SINGAPORE.jpg',
			description: 'Garlic buttered spinach, mozzarella, parmesan',
			tags: ['vegetarian']
		},
		{
			name: 'Buffalo',
			image: '/EmpanadaPics/Items Photos/BUFFALO.jpg',
			description: 'Buffalo chicken, mozzerella',
			tags: ['chicken', 'spicy']
		}
	]

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
						className="bg-[#bf8000] inline-block rounded-full px-8 py-4 font-medium text-white tracking-wide text-sm uppercase shadow-md"
					>
						Build Your 12 Pack
					</button>
				</div>
				<div className="flex flex-row justify-center items-center gap-6 px-8 py-14">
					<button onClick={useNext} type="button" className="w-12 h-12 flex items-center justify-center rounded-full border border-[#d9cfc0] bg-white text-[#7a6a55] text-xl shrink-0">←</button>
					{currentDisplay.map((index) => (
						<div key={index} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-[#ede5d8] w-1/4 shrink-0">
							<div className="bg-[#f5efe6] p-5">
								<img src={empanadaFlavors[index].image} loading="lazy" className="w-full object-contain aspect-[4/3] rounded-xl" />
							</div>
							<div className="py-4 px-5 flex flex-col gap-1 h-40">
								<p className="text-xs font-medium tracking-widest uppercase text-[#bf8000]">Signature Flavor</p>
								<h1 className="font-bold tracking-wide font-inter text-xl text-[#1a1209]">{empanadaFlavors[index].name}</h1>
								{empanadaFlavors[index].description && (
									<p className="text-sm text-[#6f5e48]">{empanadaFlavors[index].description}</p>
								)}
								{empanadaFlavors[index].tags && (
									<div className="flex flex-wrap gap-2 mt-1">
										{empanadaFlavors[index].tags.map((tag: string) => (
											<span key={tag} className="text-[10px] tracking-wide uppercase bg-[#f8f2e9] text-[#8a6f45] border border-[#e9dece] px-2 py-1 rounded-full">
												{tag}
											</span>
										))}
									</div>
								)}
							</div>
						</div>
					))}
					<button onClick={usePrevious} type="button" className="w-12 h-12 flex items-center justify-center rounded-full border border-[#d9cfc0] bg-white text-[#7a6a55] text-xl shrink-0">→</button>
				</div>
			</div>
		</div>
	)
}

export default Home;