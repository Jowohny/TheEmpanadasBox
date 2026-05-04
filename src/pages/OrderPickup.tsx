import LocationCard from '../components/LocationCard';
import MarketLocationCard from '../components/MarketLocationCard';
import Locations from '../data/LocationInfo';
import MarketLocations from '../data/MarketLocationInfo';

const deliveryServices = [
  { key: 'doordashLink',    label: 'DoorDash' },
  { key: 'uberEatsLinks',   label: 'Uber Eats' },
  { key: 'postmatesLink',   label: 'Postmates' },
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

			<div className="relative flex min-h-[38rem] items-center justify-between overflow-hidden border-b border-[#e2d8ca] bg-[#faf7f2] px-20 py-16">
				<div className="absolute left-0 top-0 h-full w-3 bg-[#fec32f]" />
				<div className="absolute inset-0 bg-[url('/stamps.jpg')] bg-repeat bg-center opacity-[0.06]" />

				<div className="relative z-10 ml-6">
					<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
						Passport Rewards
					</p>
					<h2 className="mb-5 font-inter text-7xl font-black leading-[0.88] tracking-tight text-[#242424]">
						Don't Leave<br />Without Your<br />Stamps!
					</h2>
					<p className="mb-8 max-w-md text-lg font-light leading-relaxed text-[#64605b]">
						Sign in at checkout to earn Passport Stamps on every order.
					</p>

					<div className="mb-9 flex gap-4">
						{[
							{ stamps: '50', reward: '1 Free Empanada' },
							{ stamps: '70', reward: 'Free Combo'      },
						].map(({ stamps, reward }) => (
							<div key={stamps} className="rounded-xl border border-[#e2d8ca] bg-white/60 px-5 py-4">
								<p className="font-inter text-3xl font-black leading-none text-[#242424]">{stamps}</p>
								<p className="mt-1 font-mono text-[10px] font-black uppercase tracking-[0.18em] text-[#fec32f]">Stamps</p>
								<p className="mt-2 font-inter text-sm font-medium text-[#5f5a54]">{reward}</p>
							</div>
						))}
					</div>

					<div className="flex gap-4">
						<button
							className="rounded-full bg-[#fec32f] px-8 py-4 font-mono text-xs font-black uppercase tracking-[0.16em] text-[#765600] shadow-md"
						>
							Check Stamp Balance
						</button>
						<button
							className="rounded-full border border-[#d4c9b8] bg-transparent px-8 py-4 font-mono text-xs font-black uppercase tracking-[0.16em] text-[#5f5a54]"
						>
							Learn More
						</button>
					</div>
				</div>

				<div className="relative z-10 mr-10 h-[33rem] w-[33rem] overflow-hidden rounded-full border-8 border-[#faf7f2] shadow-[0_28px_60px_rgba(26,18,9,0.18)]">
					<img
						src="/EmpanadaPics/Singapore Case.png"
						alt="Fresh empanadas"
						className="h-full w-full object-cover object-center"
					/>
				</div>
			</div>

			<div className="relative overflow-hidden border-b border-[#e2d8ca] bg-[#0d0c0b] px-20 py-16">
				<div className="absolute left-0 top-0 h-full w-3 bg-[#fec32f]" />

				<div className="ml-6">
					<p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
						Reheating Guide
					</p>
					<h2 className="mb-10 font-inter text-5xl font-black tracking-tight text-[#faf7f2]">
						How to Heat Your Empanadas
					</h2>

					<div className="flex gap-5">
						<div className="flex flex-1 flex-col justify-between rounded-2xl border border-white/8 bg-white/4 p-7">
							<div>
								<p className="mb-2 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#fec32f]">The Gold Standard</p>
								<p className="mb-2 font-inter text-2xl font-black text-[#faf7f2]">Air Fryer</p>
								<p className="text-sm font-light leading-relaxed text-white/40">
									Keeps the crust crispy and the filling perfectly hot all the way through.
								</p>
							</div>
							<div className="mt-6 rounded-xl border border-[#fec32f]/20 bg-[#fec32f]/8 px-5 py-4">
								<p className="font-mono text-xs font-black uppercase tracking-widest text-[#fec32f]">350°F — 3 to 5 mins</p>
							</div>
						</div>

						<div className="flex flex-1 flex-col justify-between rounded-2xl border border-white/8 bg-white/4 p-7">
							<div>
								<p className="mb-2 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-white/30">For Large Batches</p>
								<p className="mb-2 font-inter text-2xl font-black text-[#faf7f2]">Oven</p>
								<p className="text-sm font-light leading-relaxed text-white/40">
									Best when feeding a crowd. Place on a wire rack for even heat circulation.
								</p>
							</div>
							<div className="mt-6 rounded-xl border border-white/8 bg-white/4 px-5 py-4">
								<p className="font-mono text-xs font-black uppercase tracking-widest text-white/40">375°F — 5 to 8 mins</p>
							</div>
						</div>

						<div className="flex flex-1 flex-col justify-between rounded-2xl border border-red-900/30 bg-red-950/20 p-7">
							<div>
								<p className="mb-2 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-red-400/70">Never Do This</p>
								<p className="mb-2 font-inter text-2xl font-black text-[#faf7f2]">Microwave</p>
								<p className="text-sm font-light leading-relaxed text-white/40">
									Turns the crust soggy and ruins the texture. Do yourself a favor and use the air fryer.
								</p>
							</div>
							<div className="mt-6 rounded-xl border border-red-900/30 bg-red-950/30 px-5 py-4">
								<p className="font-mono text-xs font-black uppercase tracking-[0.15em] text-red-400/70">Not recommended — ever</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OrderPickup
