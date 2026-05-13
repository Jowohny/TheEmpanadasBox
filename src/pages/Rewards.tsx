import StampWayCard from "../components/StampWayCard";
import StampWays from "../data/StampWays";

const Rewards = () => {
	return (
		<div className="min-w-screen min-h-screen -mt-[8.25rem]">
			<div className="relative flex items-center justify-center overflow-hidden">
				<img
					src="/EmpanadaPics/BYC.jpg"
					className="z-0 object-cover"
					style={{ width: '100vw', height: 'calc(100vh + 2.25rem)' }}
				/>
				<div className="absolute inset-0 z-10 bg-black/30" />

				<div className="absolute z-20 flex max-w-4xl flex-col items-center px-6 text-center">
					<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
						<span className="font-mono text-xs font-black uppercase tracking-[0.22em] text-white">
							Loyalty Program
						</span>
					</div>

					<h1 className="mb-6 font-inter text-8xl font-black uppercase leading-[0.85] tracking-wide text-white">
						Rewards every time
						<br />
						<span className="italic text-[#fec32f]">you eat!</span>
					</h1>

					<div className="mb-6 h-[2px] w-12 bg-[#fec32f]" />

					<p className="mb-10 max-w-2xl font-mono text-lg font-medium tracking-wide text-white/80">
						Join for free and earn Passport Stamps every time you shop <br /> because tasting the world should pay off.
					</p>

					<div className="flex flex-row items-center gap-3">
						<button
							type="button"
							className="rounded-full border-2 border-black/20 bg-[#fec32f] px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wide text-[#1a1209] shadow-lg"
						>
							Join Now
						</button>
						<button
							type="button"
							className="rounded-full border-2 border-white/10 bg-[#1a1209] px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wide text-white shadow-md"
						>
							Sign In
						</button>
					</div>
				</div>
			</div>

			<div className="bg-[#faf7f2] px-20 py-24">
				<div className="mx-auto max-w-[90rem]">
					<div className="mb-16 text-center">
						<h2 className="font-inter text-6xl font-black tracking-tight text-[#1a1209]">
							Earn Your <span className="italic text-[#D09501]">Stamps</span>
						</h2>
					</div>

					<div className="grid grid-cols-5 items-start gap-6">
						{StampWays.map((stampWay) => (
							<StampWayCard key={stampWay.stamps + stampWay.category} stampWay={stampWay} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rewards;
