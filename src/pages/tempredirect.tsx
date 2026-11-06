import { useEffect } from 'react';

const SHIPPING_URL = 'https://theempanadasboxshipping.square.site/';

const TempRedirect = () => {
	useEffect(() => {
		window.location.replace(SHIPPING_URL);
	}, []);

	return (
		<div className="flex min-h-[60vh] items-center bg-[#faf7f2] px-6 py-14 md:px-12 lg:px-16">
			<div className="mx-auto w-full max-w-5xl">
				<h1 className="font-inter text-4xl font-black leading-[0.95] tracking-tight text-[#1a1209] md:text-6xl">
					Taking you to our <span className="italic text-[#D09501]">shop.</span>
				</h1>
				<div className="mt-5 h-[2px] w-12 bg-[#bf8000]" />
				<p className="mt-5 text-base font-light text-[#64605b] md:text-lg">
					Not moving?{' '}
					<a href={SHIPPING_URL} className="text-[#bf8000] underline underline-offset-4">
						Open the shipping store
					</a>
				</p>
			</div>
		</div>
	);
};

export default TempRedirect;
