const OrderPickup = () => {
  return (
    <div className="min-w-screen min-h-screen">
      <div
        className="min-h-screen w-full relative flex flex-col items-center justify-end -mt-[8.25rem] pb-12 overflow-hidden"
        style={{
          backgroundImage: 'url("/EmpanadaPics/Singapore Case.png")'
        }}
      >
				<div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent z-10" />
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
							Journey from out kitchen to your table without <br />
							losing a single note of flavor.
						</p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-3 mt-2">
          <div className="w-16 h-[2px] bg-[#bf8000]" />
          <p className="font-mono text-sm font-medium tracking-[0.2em] uppercase text-black">
            Fresh. Frozen. Ready when you are.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderPickup;