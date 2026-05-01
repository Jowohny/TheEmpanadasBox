import LocationCard from '../components/LocationCard';
import MarketLocationCard from '../components/MarketLocationCard';
import Locations from '../data/LocationInfo';
import MarketLocations from '../data/MarketLocationInfo';

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
		</div>
	)
}

export default OrderPickup
