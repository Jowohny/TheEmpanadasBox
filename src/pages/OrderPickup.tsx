import LocationCard from '../components/LocationCard';
import MarketLocationCard from '../components/MarketLocationCard';
import Locations from '../data/LocationInfo';
import MarketLocations from '../data/MarketLocationInfo';

const DoorDashIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.003 0C5.374 0 0 5.372 0 11.997c0 6.628 5.374 12 12.003 12C18.63 24 24 18.625 24 11.997 24 5.372 18.63 0 12.003 0zm5.09 9.356H9.875a2.644 2.644 0 0 0 0 5.288h1.663v2.374H9.875a5.018 5.018 0 1 1 0-10.036h7.217v2.374z"/>
  </svg>
)

const UberEatsIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.273 6.545h2.546v5.092a1.273 1.273 0 1 0 2.545 0V6.545h2.546v5.092a3.818 3.818 0 0 1-7.637 0V6.545zm-4.363 0h7.272v2.273H8.727v1.136h2.91v2.273h-2.91v1.136h3.637v2.273H6.364V6.545z"/>
  </svg>
)

const PostmatesIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.8 16.4H6.2c-.44 0-.8-.36-.8-.8V8.4c0-.44.36-.8.8-.8h11.6c.44 0 .8.36.8.8v7.2c0 .44-.36.8-.8.8zm-5.8-6.8a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8z"/>
  </svg>
)

const deliveryServices = [
  { key: 'doordashLink',    label: 'DoorDash',  Icon: DoorDashIcon  },
  { key: 'uberEatsLinks',   label: 'Uber Eats', Icon: UberEatsIcon  },
  { key: 'postmatesLink',   label: 'Postmates', Icon: PostmatesIcon },
]

const OrderPickup = () => {

	return (
		<div className="min-w-screen min-h-screen">
			<div
				className="min-h-screen w-full relative flex flex-col items-center justify-end -mt-[8.25rem] pb-12 overflow-hidden bg-cover bg-center"
				style={{
					backgroundImage: 'url("/EmpanadaPics/Singapore Case.png")'
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent z-10" />
				<div className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/5 to-transparent z-10" />
				<div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
					<div className="text-9xl font-bold tracking-tight leading-[0.9] ml-12">
						<div className="inline-block font-bold uppercase text-base tracking-widest font-mono bg-red-400/40 text-center rounded-full py-1 text-red-900 px-4 mb-8">
							The World Tour Experience
						</div>
						<h2 className="text-[#765600]">Pick Up.</h2>
						<h2 className="text-[#a33522]">Heat Up.</h2>
						<h2 className="text-[#765600] mb-8">Eat Up.</h2>
						<p className="font-sans text-3xl text-gray-600 tracking-wide font-normal">
							Our handcrafted crusts are designed to travel. <br />
							Journey from our kitchen to your table without <br />
							losing a single note of flavor.
						</p>
					</div>
				</div>

				<div className="relative z-10 flex flex-col items-center gap-3 mt-2">
					<div className="w-24 h-[2px] bg-[#bf8000] mb-2" />
					<p className="font-mono text-base font-bold tracking-[0.2em] uppercase text-black">
						Fresh. Frozen. Ready when you are.
					</p>
				</div>
			</div>

			<div className="bg-[#f2f1ec] min-h-screen px-6 py-16">
				<div className="mx-auto max-w-[90rem]">
					<div className="mb-14 text-center">
						<h1 className="text-[#765600] block text-center font-semibold tracking-wide text-6xl mb-4">
							Where are we heading today?
						</h1>
						<p className="text-gray-500/80 text-xl font-extralight tracking-wide">
							Find the closest location to you for your next pickup.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-12 mb-12">
						{Locations.map((location) => (
							<LocationCard location={location}/>
						))}
					</div>

					<div className="mb-14 text-center">
						<h1 className="text-[#765600] block text-center font-semibold tracking-wide text-6xl mb-4">
							Check out our farmers market locations!
						</h1>
						<p className="text-gray-500/80 text-xl font-extralight tracking-wide">
							Make time to drop by and see us in person. ( At these locations, we only sell frozen empanadas for at home preparation )
						</p>
					</div>

					<div className='grid grid-cols-2 gap-12'>
						{MarketLocations.map((marketLocation) => (
							<MarketLocationCard marketLocation={marketLocation} />
						))}
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center gap-3 bg-[#0d0c0b] px-20 py-5 border-y border-white/8">
				<p className="font-mono text-xs font-black uppercase tracking-[0.25em] text-white/90">
					Order for Delivery
				</p>

				<span className="text-[#fec32f]/30 scale-x-[3]">-</span>

				{Locations.flatMap((location, li) =>
					deliveryServices.map(({ key, label }, si) => {
						const href = location[key as keyof typeof location] as string
						const isLast = li === Locations.length - 1 && si === deliveryServices.length - 1
						return (
							<div key={`${li}-${si}`} className="flex items-center gap-3">
								<a
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="cursor-pointer font-mono text-xs font-black uppercase tracking-[0.2em] text-white/70 transition-colors duration-200 hover:text-[#fec32f]"
								>
									{label}
									<span className="ml-1 font-normal normal-case tracking-normal text-white/40">
										({location.name.split('\n')[1]})
									</span>
								</a>
								{!isLast && <span className="text-[#fec32f]/20">&bull;</span>}
							</div>
						)
					})
				)}
			</div>
		</div>
	)
}

export default OrderPickup
