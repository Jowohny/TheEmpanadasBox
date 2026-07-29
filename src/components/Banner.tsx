const Banner = () => {
	return (
		<div className="relative z-50 overflow-hidden uppercase min-w-full h-9 bg-[#fec32f] text-center flex items-center justify-center font-semibold text-md tracking-wide font-mono motion-safe:animate-[drop-in_0.5s_ease-out_both]">
			<span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/25 blur-md motion-safe:animate-[banner-sheen_6s_ease-in-out_infinite]" />
			Free Shipping on Orders Over $150
		</div>
	)
}

export default Banner