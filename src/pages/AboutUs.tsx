import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
	const navigate = useNavigate()

	return (
		<div className="min-w-screen min-h-screen -mt-[8.25rem] overflow-x-hidden bg-[#faf7f2]">
			<div className="relative flex items-center justify-center overflow-hidden">
				<img
					src="/EmpanadaHero.webp"
					className="z-0 object-cover"
					style={{ width: '100vw', height: 'calc(100vh + 2.25rem)' }}
				/>
				<div className="absolute inset-0 z-10 bg-radial-[at_50%_60%] from-black/60 via-black/20 to-transparent" />
				<div className="absolute inset-0 z-10 -mt-60 bg-gradient-to-b from-white via-white/[0.0001] to-transparent" />

				<div className="absolute z-20 flex max-w-4xl flex-col items-center px-6 text-center">
					<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
						<span className="font-mono text-xs font-black uppercase tracking-[0.22em] text-white">
							The Empanadas Box
						</span>
					</div>
					<h1 className="mb-6 font-inter text-8xl font-black uppercase leading-[0.85] tracking-wide text-white">
						About <span className="italic text-[#fec32f]">us</span>
					</h1>
					<div className="mb-6 h-[2px] w-12 bg-[#fec32f]" />
				</div>
			</div>

			<div className="relative overflow-hidden bg-[#faf7f2] px-20 py-28">
				<div className="relative mx-auto flex max-w-[90rem] justify-end">

					{/* ADD IMAGE HERE */}
					<img src="" className="h-[42rem] w-[60%] rounded-xl object-cover" />
					<div className="absolute left-0 top-1/2 w-[46%] -translate-y-1/2 bg-white p-12 shadow-[0_30px_70px_rgba(26,18,9,0.16)]">
						<div className="mb-6 h-[3px] w-14 bg-[#bf8000]" />
						<p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Where it began
						</p>
						<h2 className="font-inter text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Our Story
						</h2>
						<div className="mt-6 space-y-5 text-lg font-light leading-relaxed text-[#64605b]">
							<p>
								Meet me, Diego Nunez - a Buenos Aires native now bringing authentic empanadas to your table. Rooted in family 
								traditions of excellent food and hard work, my journey from Argentina to the US led me to specialize in these 
								delectable baked treats. With years of experience in the culinary world, I proudly present The Empanada's Box.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="relative overflow-hidden bg-white px-20 py-28">
				<div className="mx-auto max-w-[90rem]">
					<div className="mb-4">
						<p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							The people
						</p>
						<h2 className="font-inter text-6xl font-black tracking-tight text-[#1a1209]">
							The Team
						</h2>
					</div>

					<div className="flex justify-center gap-10">
						{[0, 1, 2].map((i) => (
							<div key={i} className={`w-1/3 ${i === 1 ? 'mt-28' : i === 2 ? 'mt-14' : ''}`}>
								<div className="h-[26rem] w-full overflow-hidden rounded-xl bg-[#ede5d8]">

									{/* REPLACE IMAGE HERE */}
									<img src="" className="h-full w-full object-cover opacity-70" />
								</div>

								{/* REPLACE WITH TEAM MEMBER INFO HERE */}
								<h3 className="mt-6 font-inter text-2xl font-black tracking-tight text-[#c9c2b6]">Name</h3>
								<p className="mt-1 font-mono text-xs font-black uppercase tracking-[0.2em] text-[#bf8000]/50">Role / Title</p>
								<p className="mt-4 text-base font-light leading-relaxed text-[#a8a196]">
									Short bio placeholder — a sentence or two about this team member.
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="relative overflow-hidden bg-[#0d0c0b] px-20 py-40">
				<span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none font-inter text-[17rem] font-black uppercase leading-none tracking-tighter text-white/[0.04]">
					Mission
				</span>
				<div className="relative mx-auto max-w-[90rem]">
					<div className="ml-auto max-w-3xl text-right">
						<p className="mb-6 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
							What drives us
						</p>
						<h2 className="mb-8 font-inter text-5xl font-black uppercase tracking-tight text-[#faf7f2]">
							Mission
						</h2>
						<p className="text-xl font-light leading-snug text-white/80">
						You can take a trip with our unique 16 + international flavors. The Empanada's Box's mission is to bring a different 
						culture to Cincinnati, bringing our roots and fusing them with other cultures and their flavors. Empanadas are easy 
						to eat, the perfect finger food without the need of utensils. A nutritious and delicious pocket of goodness. We 
						recently graduated from the Findlay Launch Storefront Accelerator Program and moved to our permanent location over in 
						Covington, KY. <br/><br/>
						We hope you come visit us & join us on our empanada journey! 
						</p>
					</div>
				</div>
			</div>

			<div className="relative min-h-[44rem] overflow-hidden bg-[#faf7f2]">

				{/* REPLANCE IMAGE HERE */}
				<img
					src=""
					className="absolute right-0 top-0 h-full w-[46%] object-cover"
				/>
				<div className="relative mx-auto flex min-h-[44rem] max-w-[90rem] items-center px-20">
					<div className="w-[50%]">
						<p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Why empanadas
						</p>
						<h2 className="font-inter text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Empanada: The Perfect Finger Food
						</h2>
						<div className="my-8 h-[2px] w-12 bg-[#bf8000]" />
						<p className="max-w-xl text-lg font-light leading-relaxed text-[#64605b]">
							The empanada is unique for the simple fact that no matter who you are or what you enjoy to eat, there will always 
							be an empanada for you. <br/><br className='leading-none'/>
							We offer flavors for meat eaters, vegetarians, sweet lovers and even vegan options. Being a family business solely 
							focused on making empanadas, we are able to put all of our energy, time and love into producing the best quality 
							empanadas for your taste buds.
						</p>
					</div>
				</div>
			</div>

			<div className="relative overflow-hidden bg-white px-20 py-28">
				<div className="mx-auto flex max-w-[90rem] items-center gap-20">
					<div className="relative w-[52%]">

						{/* REPLANCE IMAGES HERE */}
						<img src="" className="h-[38rem] w-full rounded-xl object-cover" />
						<img
							src=""
							className="absolute -bottom-10 -right-10 h-52 w-52 rounded-xl border-8 border-white object-cover shadow-[0_20px_45px_rgba(26,18,9,0.22)]"
						/>
					</div>
					<div className="w-[40%]">
						<p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							The taste
						</p>
						<h2 className="font-inter text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Authentic Flavor
						</h2>
						<div className="my-8 h-[2px] w-12 bg-[#bf8000]" />
						<p className="text-lg font-light leading-relaxed text-[#64605b]">
							All of our recipes are authentic creations, fusing different cultures and their flavors. No preservatives; all 
							ingredients are fresh & every week we make a fresh batch of each flavor. Crafting everything by hand, we forge 
							authentic creations to make the best gourmet empanadas in town!   
						</p>
					</div>
				</div>
			</div>

			<div className="relative min-h-[44rem] overflow-hidden bg-[#faf7f2]">

				{/* REPLANCE IMAGE HERE */}
				<img
					src=""
					className="absolute left-0 top-0 h-full w-[46%] object-cover"
				/>
				<div className="relative mx-auto flex min-h-[44rem] max-w-[90rem] items-center justify-end px-20">
					<div className="w-[50%]">
						<p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Fresh daily
						</p>
						<h2 className="font-inter text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Hot-&-Ready Empanadas
						</h2>
						<div className="my-8 h-[2px] w-12 bg-[#bf8000]" />
						<p className="max-w-xl text-lg font-light leading-relaxed text-[#64605b]">
							We offer hot-and-ready empanadas, the perfect finger food that you can eat without the need of utensils. Perfect 
							for dining in, take-out, deliveries, catering and private events. <br/><br className='leading-none'/>
							All of our creations are made from scratch and we keep a handful of each of our offerings baked hot and fresh for 
							easy take-out. Every empanada comes with a side of our traditional Chimichurri sauce.
						</p>
					</div>
				</div>
			</div>

			<div className="relative overflow-hidden bg-white px-20 py-28">
				<div className="relative mx-auto max-w-[90rem]">
					<div className="flex justify-end">

						{/* REPLANCE IMAGE HERE */}
						<img src="" className="mt-24 h-[36rem] w-[54%] rounded-xl object-cover" />
					</div>
					<div className="absolute left-0 top-0 w-[44%]">
						<p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							The sauce
						</p>
						<h2 className="font-inter text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Chimichurri
						</h2>
						<div className="my-8 h-[2px] w-12 bg-[#bf8000]" />
						<p className="text-xl font-light leading-relaxed text-[#64605b]">
							Chimichurri is an uncooked herbs and oil sauce used principally on grilled meat, another specialty in Argentina. 
							This most famous Argentine sauce was first mixed together by "gauchos" or cowboys who used it to flavor the meat 
							they prepared over open fires when on the pampas.
						</p>
					</div>
				</div>
			</div>

			<div className="relative min-h-[46rem] overflow-hidden">

				{/* REPLANCE IMAGE HERE */}
				<img
					src=""
					className="absolute inset-0 h-full w-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
				<div className="relative mx-auto flex min-h-[46rem] max-w-[90rem] items-center px-20">
					<div className="w-[56%]">
						<p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
							For your crew
						</p>
						<h2 className="font-inter text-6xl font-black leading-[0.95] tracking-tight text-white">
							Catering
						</h2>
						<div className="my-8 h-[2px] w-12 bg-[#fec32f]" />
						<p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-white/85">
							Offer your guests the opportunity to relax and enjoy empanadas from The Empanada’s Box! Empanadas are always ideal 
							for catering! But, do you know why? First, due to it being a type of baked turnover, they maintain their warmth 
							for long-lasting freshness. And secondly, they can be picked up and eaten easily, with just the need of a napkin. 
							We are always available for any type of occasion like: company, personal, office lunches, corporate events, weddings, 
							and parties. Our menu is diverse for any tongue palate: vegan, vegetarian & meat lovers. Whichever event you need 
							catering for, you can count on us for the freshest and most delicious empanadas in town!
						</p>
						<button
							type="button"
							onClick={() => navigate('/Catering')}
							className="rounded-full bg-[#fec32f] px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wide text-[#1a1209] shadow-md"
						>
							Explore Catering →
						</button>
					</div>
				</div>
			</div>

			<div className="relative z-10 bg-white px-20 pt-28 pb-16">
				<div className="mx-auto flex max-w-[90rem] items-center gap-20">
					<div className="w-[42%]">
						<p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Stock your freezer
						</p>
						<h2 className="font-inter text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Frozen Empanadas
						</h2>
						<div className="my-8 h-[2px] w-12 bg-[#bf8000]" />
						<p className="mb-8 text-lg font-light leading-relaxed text-[#64605b]">
							We also offer frozen empanadas to take home, ideal for stocking up or even as a gift. Frozen empanadas can be kept 
							frozen for 60 days. Easy to heat up in an oven or air fryer, at 400 F degrees for about 10-15 minutes. Fast, easy 
							and super beneficial when having a party, office meeting or even just for lunch. <br /><br />
							So...what are you waiting for? <br />
							Grab an empanada, bite into it and enjoy the trip!
						</p>
						<button
							type="button"
							onClick={() => navigate('/ShipNationwide')}
							className="rounded-full bg-[#bf8000] px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wide text-white shadow-md"
						>
							Shop Frozen Boxes →
						</button>
					</div>
					<div className="w-[54%]">

						{/* REPLANCE IMAGE HERE */}
						<img
							src=""
							className="h-[40rem] w-full translate-y-20 rounded-xl object-cover shadow-[0_30px_70px_rgba(26,18,9,0.25)]"
						/>
					</div>
				</div>
			</div>

			<div className="relative z-0 overflow-hidden bg-[#fec32f] px-20 pt-40 pb-28">
				<div className="mx-auto flex max-w-[90rem] items-center gap-16">
					<div className="w-[56%]">
						<p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#765600]">
							Our roots
						</p>
						<h2 className="font-inter text-6xl font-black leading-[0.9] tracking-tight text-[#1a1209]">
							Findlay Launch Storefront Accelerator Graduates!
						</h2>
						<div className="my-8 h-[2px] w-16 bg-[#1a1209]/40" />
						<p className="max-w-xl text-lg font-light leading-relaxed text-[#5a4a12]">
							The Findlay Launch Storefront Accelerator Program is a two-part program made up of a 9 week curriculum-based program 
							leading into a business residency in one of the Findlay Launch Storefronts located in the Findlay Market District. 
							We are proud to be the first graduates! 2021-2022
						</p>
					</div>
					<div className="w-[40%]">

						{/* REPLANCE IMAGE HERE */}
						<img src="" className="h-[24rem] w-full rounded-xl bg-white object-contain p-10 shadow-[0_24px_50px_rgba(26,18,9,0.2)]" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
