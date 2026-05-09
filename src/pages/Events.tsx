const Events = () => {
	return (
		<div className="min-w-screen min-h-screen -mt-[8.25rem]">
			<div className="relative flex items-center justify-end overflow-hidden">
				<img
					src="/EmpanadaPics/EzCaterer Menu/Empanada Party Pack - 50 Ppl.jpg"
					className="z-0 object-cover"
					style={{ width: '100vw', height: 'calc(100vh + 2.25rem)' }}
				/>
				<div className="absolute inset-0 bg-gradient-to-l from-white via-white/75 to-transparent z-10" />

				<div className="absolute z-20 mr-16 max-w-2xl text-right">
					<p className="mb-6 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
						Private Events
					</p>
					<h1 className="font-inter font-black uppercase text-8xl scale-y-[1.05] leading-[0.85] tracking-wide text-[#1a1209] mb-6">
						Bring the <br />
						<span className="italic text-[#D09501]">world tour</span> <br />
						to your event
					</h1>
					<div className="ml-auto h-[2px] w-12 bg-[#bf8000] mb-6" />
					<p className="font-mono text-base font-medium tracking-wide text-slate-600 mb-8">
						Weddings, corporate gatherings, parties — we cater the spread that travels around the world in five bites.
					</p>
					<div className="flex flex-row gap-3 items-center justify-end">
						<button
							type="button"
							className="bg-[#bf8000] rounded-full px-8 py-4 font-mono font-semibold text-white tracking-wide text-sm uppercase shadow-lg border-2 border-black/20"
						>
							Request a Quote
						</button>
						<button
							type="button"
							className="bg-white rounded-full px-8 py-4 font-mono font-semibold text-[#bf8000] tracking-wide text-sm uppercase shadow-md border-2 border-[#bf8000]/30"
						>
							See Packages
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
