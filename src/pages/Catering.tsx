const CATERING_URL = 'https://theempanadasboxcatering.square.site/';

const Catering = () => {
	return (
		<div className="min-w-screen min-h-screen -mt-[8.25rem]">
			<div className="relative flex items-center justify-center overflow-hidden">
				<img
					src="/EmpanadaPics/EzCaterer Menu/3 Empanada Lunch Box.jpg"
					className="z-0 object-cover"
					style={{ width: '100vw', height: 'calc(100vh + 2.25rem)' }}
				/>
				<div className="absolute inset-0 z-10 bg-radial-[at_50%_65%] from-black/60 via-black/20 to-transparent" />
				<div className="absolute inset-0 z-10 -mt-60 bg-gradient-to-b from-white via-white/[0.0001] to-transparent" />

				<div className="absolute z-20 flex max-w-4xl flex-col items-center px-6 text-center">
					<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
						<span className="font-mono text-xs font-black uppercase tracking-[0.22em] text-white">
							Catering
						</span>
					</div>

					<h1 className="mb-6 font-inter text-8xl font-black uppercase leading-[0.85] tracking-wide text-white">
						Bring the box <br />
						to your <span className="italic text-[#fec32f]">crew.</span>
					</h1>

					<div className="mb-6 h-[2px] w-12 bg-[#fec32f]" />

					<p className="mb-10 max-w-2xl font-mono text-lg font-medium tracking-wide text-white/80">
						Boxed lunches, drop-off platters, full-spread catering — order ahead through our ezCater storefront.
					</p>

					<a
						href={CATERING_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full border-2 border-black/20 bg-[#fec32f] px-10 py-5 font-mono text-base font-semibold uppercase tracking-wide text-[#1a1209] shadow-lg"
					>
						View Catering Menu →
					</a>
				</div>
			</div>
		</div>
	);
};

export default Catering;
