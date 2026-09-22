import { useNavigate } from 'react-router-dom';
import { Milestones } from '../data/Origins';
import { Family } from '../data/Family';

const satellites = [
	'h-28 w-28 bottom-4 right-4 md:h-40 md:w-40 md:-bottom-10 md:right-8 lg:h-52 lg:w-52',
	'h-20 w-20 top-4 left-4 md:h-28 md:w-28 md:-top-8 md:-left-8 lg:h-32 lg:w-32',
	'hidden md:block h-32 w-32 top-16 -right-10 lg:h-44 lg:w-44 lg:top-24 lg:-right-12',
	'hidden md:block h-28 w-28 -bottom-6 -left-10 lg:h-40 lg:w-40 lg:-bottom-8',
	'hidden lg:block h-28 w-28 top-[38%] -left-16',
]

const AboutUs = () => {
	const navigate = useNavigate()

	return (
		<div className="min-w-screen min-h-screen -mt-[8.25rem] overflow-x-hidden bg-[#faf7f2]">
			<div className="relative flex items-center justify-center overflow-hidden">
				<img
					src="/EmpanadaHero.webp"
					className="z-0 w-full object-cover"
					style={{ height: 'calc(100vh + 2.25rem)' }}
				/>
				<div className="absolute inset-0 z-10 bg-radial-[at_50%_60%] from-black/60 via-black/20 to-transparent" />
				<div className="absolute inset-0 z-10 -mt-40 md:-mt-60 bg-gradient-to-b from-white via-white/[0.0001] to-transparent" />

				<div className="absolute z-20 flex max-w-4xl flex-col items-center px-6 text-center">
					<div className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 md:px-4 py-2 backdrop-blur-md">
						<span className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.22em] text-white">
							The Empanadas Box
						</span>
					</div>
					<h1 className="mb-6 font-inter text-6xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.85] tracking-wide text-white">
						About <span className="italic text-[#fec32f]">us</span>
					</h1>
					<div className="mb-6 h-[2px] w-12 bg-[#fec32f]" />
				</div>
			</div>

			<div className="relative overflow-hidden bg-[#faf7f2] px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28">
				<div className="relative mx-auto max-w-[90rem] lg:flex lg:justify-end">

					{/* ADD IMAGE HERE */}
					<img src="" className="h-60 sm:h-80 w-full rounded-xl object-cover lg:h-[42rem] lg:w-[60%]" />
					<div className="relative -mt-10 mx-auto w-[92%] bg-white p-7 sm:p-10 shadow-[0_30px_70px_rgba(26,18,9,0.16)] lg:absolute lg:left-0 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[46%] lg:-translate-y-1/2 lg:p-12">
						<div className="mb-6 h-[3px] w-14 bg-[#bf8000]" />
						<p className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Insider
						</p>
						<h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Who are we?
						</h2>
						<div className="mt-6 space-y-5 text-base md:text-lg font-light leading-relaxed text-[#64605b]">
							<p>
								Welcome to The Empanada’s Box! We are a family-owned and operated kitchen bringing the rich 
								culinary heritage of Buenos Aires straight to your table. 
							</p>
							<p>
								We believe that eating empanadas is the tastiest way to travel. That is why we specialize in
								authentic Argentine-style gourmet empanadas fused with distinct flavors from cultures all
								around the globe. Handcrafted fresh every week with no artificial preservatives, our menu
								features 14+ flavors for meat lovers, vegetarians, sweet tooths, and vegans alike.
							</p>
							<p>
								Empanadas are the ultimate pocket of goodness: packed with nutrition, easy to eat, and the
								perfect finger food without any need for utensils.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="relative overflow-hidden bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28">
				<div className="mx-auto max-w-[90rem]">
					<div className="mb-8 md:mb-4">
						<p className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Our Origins
						</p>
						<h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1a1209]">
							From a Pop-Up to Elm Street
						</h2>
					</div>

					<p className="max-w-2xl text-base md:text-lg font-light leading-relaxed text-[#64605b]">
						Our journey started in the heart of the community with a simple table, a pop-up tent, and a
						passion for sharing authentic South American street food.
					</p>

					<div className="relative mt-12 md:mt-16">
						<div className="absolute left-[11px] top-4 bottom-4 border-l-[3px] border-dotted border-[#bf8000]/40 md:left-[13px]" />

						<ol className="flex flex-col gap-12 md:gap-16">
							{Milestones.map((m) => (
								<li key={m.marker} className="relative pl-12 md:pl-16">
									<span className="absolute left-0 top-0 bg-white pb-1">
										<img src="/icons/pin.svg" className="h-6 w-6 md:h-7 md:w-7" />
									</span>
									<p className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.22em] text-[#bf8000]">
										{m.marker}
									</p>
									<h3 className="mt-2 font-inter text-2xl md:text-3xl font-black leading-tight tracking-tight text-[#1a1209]">
										{m.title}
									</h3>
									<p className="mt-3 max-w-2xl text-base md:text-lg font-light leading-relaxed text-[#64605b]">
										{m.body}
									</p>
								</li>
							))}
						</ol>
					</div>
				</div>
			</div>

			<div className="relative overflow-hidden bg-[#faf7f2] px-6 py-16 md:px-12 md:py-16 lg:px-20 lg:py-24">
				<div className="mx-auto max-w-[90rem]">
					<div className="mb-8 md:mb-4">
						<p className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							The Team
						</p>
						<h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1a1209]">
							Meet the Nunez Family
						</h2>
					</div>

					<div className="flex flex-col md:flex-row md:justify-center gap-12 md:gap-6 lg:gap-10">
						{Family.map((member, i) => (
							<div key={i} className={`w-full md:w-1/3 ${i%2===1 ? 'md:mt-28' : 'md:mt-14'}`}>
								<div className="h-64 sm:h-88 md:h-[17rem] lg:h-[23rem] w-full overflow-hidden rounded-xl bg-[#ede5d8]">
									<img src={member.picture} className="h-full w-full object-cover" />
								</div>

								<h3 className="mt-6 font-inter text-xl md:text-2xl font-black tracking-tight text-black">{member.name}</h3>
								<p className="mt-1 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#bf8000]">{member.title}</p>
								<p className="mt-4 text-sm md:text-base font-light leading-relaxed text-black/70">{member.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="relative overflow-hidden bg-[#0d0c0b] px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-40">
				<span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none font-inter text-[6rem] sm:text-[9rem] md:text-[13rem] lg:text-[17rem] font-black uppercase leading-none tracking-tighter text-white/[0.04]">
					Mission
				</span>
				<div className="relative mx-auto max-w-[90rem]">
					<div className="max-w-3xl text-left lg:ml-auto lg:text-right">
						<p className="mb-4 md:mb-6 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
							What drives us
						</p>
						<h2 className="mb-6 md:mb-8 font-inter text-4xl md:text-5xl font-black uppercase tracking-tight text-[#faf7f2]">
							Mission
						</h2>
						<p className="text-lg md:text-xl font-light leading-snug text-white/70">
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

			<div className="relative overflow-hidden bg-[#faf7f2] lg:min-h-[44rem]">

				{/* REPLANCE IMAGE HERE */}
				<img
					src=""
					className="h-60 sm:h-80 w-full object-cover lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[46%]"
				/>
				<div className="relative mx-auto flex max-w-[90rem] items-center px-2 py-14 md:px-4 md:py-20 lg:min-h-[44rem] lg:py-0">
					<div className="w-full lg:w-[50%]">
						<p className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Why empanadas
						</p>
						<h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Empanada: The Perfect Finger Food
						</h2>
						<div className="my-6 md:my-8 h-[2px] w-12 bg-[#bf8000]" />
						<p className="max-w-xl text-base md:text-lg font-light leading-relaxed text-[#64605b]">
							The empanada is unique for the simple fact that no matter who you are or what you enjoy to eat, there will always
							be an empanada for you. <br/><br className='leading-none'/>
							We offer flavors for meat eaters, vegetarians, sweet lovers and even vegan options. Being a family business solely
							focused on making empanadas, we are able to put all of our energy, time and love into producing the best quality
							empanadas for your taste buds.
						</p>
					</div>
				</div>
			</div>

			<div className="relative overflow-hidden bg-white lg:min-h-[44rem]">

				{/* REPLANCE IMAGE HERE */}
				<img
					src=""
					className="h-60 sm:h-80 w-full object-cover lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-[46%]"
				/>
				<div className="relative mx-auto flex max-w-[90rem] items-center px-6 py-14 md:px-12 md:py-20 lg:min-h-[44rem] lg:px-20 lg:py-0 lg:left-[50vw] lg:absolute">
					<div className="w-full">
						<p className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Flavor Explosions
						</p>
						<h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							The Handcrafted Difference
						</h2>
						<div className="my-6 md:my-8 h-[2px] w-12 bg-[#bf8000]" />
						<ul className="flex flex-col gap-12 md:gap-16">
							<li className="relative">
								<p className="mt-3 max-w-2xl text-base md:text-lg font-light leading-relaxed text-[#64605b]">
									<span className='font-black'>14+ Global Flavors:</span> From traditional Argentine staples like classic beef and house
									chimichurri to regional recipes from the Caribbean, Europe, and Asia, our menu is
									designed to take your taste buds on a trip.
								</p>
								<p className="mt-3 max-w-2xl text-base md:text-lg font-light leading-relaxed text-[#64605b]">
									<span className='font-black'>Scratch-Made & Fresh Weekly:</span> We never use preservatives. Every single empanada is
									hand-folded, stuffed with fresh ingredients, and baked fresh every week.
								</p>
								<p className="mt-3 max-w-2xl text-base md:text-lg font-light leading-relaxed text-[#64605b]">
									<span className='font-black'>Made for Everyone:</span> Whether you're dining in at our 1819 Elm St bar, grabbing a quick
									lunch to-go, or taking home a box for the family, there is always an empanada crafted
									just for you.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>


			<div className="relative overflow-hidden bg-[#faf7f2] px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28">
				<div className="mx-auto flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-20 max-w-[90rem]">
					<div className="relative w-full lg:w-[52%]">

						{/* REPLANCE IMAGES HERE */}
						<img src="" className="h-72 sm:h-96 w-full rounded-xl bg-[#ede5d8] object-cover lg:h-[38rem]" />

						{/* REPLANCE IMAGES HERE — satellites orbiting the main image */}
						{satellites.map((pos, i) => (
							<img
								key={i}
								data-float
								src=""
								className={`absolute rounded-xl border-4 border-white bg-[#ede5d8] object-cover shadow-[0_20px_45px_rgba(26,18,9,0.22)] will-change-transform md:border-[6px] ${pos}`}
							/>
						))}
					</div>
					<div className="w-full lg:w-[40%]">
						<p className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							The taste
						</p>
						<h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Authentic Flavor
						</h2>
						<div className="my-6 md:my-8 h-[2px] w-12 bg-[#bf8000]" />
						<p className="text-base md:text-lg font-light leading-relaxed text-[#64605b]">
							All of our recipes are authentic creations, fusing different cultures and their flavors. No preservatives; all
							ingredients are fresh & every week we make a fresh batch of each flavor. Crafting everything by hand, we forge
							authentic creations to make the best gourmet empanadas in town!
						</p>
					</div>
				</div>
			</div>

			<div className="relative min-h-[38rem] overflow-hidden lg:min-h-[46rem]">

				{/* REPLANCE IMAGE HERE */}
				<img
					src=""
					className="absolute inset-0 h-full w-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/40 lg:bg-gradient-to-r lg:from-black lg:via-black/70 lg:to-transparent" />
				<div className="relative mx-auto flex min-h-[38rem] max-w-[90rem] items-center px-6 py-16 md:px-12 lg:min-h-[46rem] lg:px-20 lg:py-0">
					<div className="w-full lg:w-[56%]">
						<p className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
							For your crew
						</p>
						<h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-white">
							Catering
						</h2>
						<div className="my-6 md:my-8 h-[2px] w-12 bg-[#fec32f]" />
						<p className="mb-8 max-w-2xl text-base md:text-lg font-light leading-relaxed text-white/85">
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
							className="rounded-full bg-[#fec32f] px-6 py-3 md:px-8 md:py-4 font-mono text-xs md:text-sm font-semibold uppercase tracking-wide text-[#1a1209] shadow-md"
						>
							Explore Catering →
						</button>
					</div>
				</div>
			</div>

			<div className="relative z-10 bg-white px-6 pt-16 pb-16 md:px-12 md:pt-20 lg:px-20 lg:pt-28">
				<div className="mx-auto flex max-w-[90rem] flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
					<div className="w-full lg:w-[42%]">
						<p className="mb-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Stock your freezer
						</p>
						<h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Frozen Empanadas
						</h2>
						<div className="my-6 md:my-8 h-[2px] w-12 bg-[#bf8000]" />
						<p className="mb-8 text-base md:text-lg font-light leading-relaxed text-[#64605b]">
							We also offer frozen empanadas to take home, ideal for stocking up or even as a gift. Frozen empanadas can be kept
							frozen for 60 days. Easy to heat up in an oven or air fryer, at 400 F degrees for about 10-15 minutes. Fast, easy
							and super beneficial when having a party, office meeting or even just for lunch. <br /><br />
							So...what are you waiting for? <br />
							Grab an empanada, bite into it and enjoy the trip!
						</p>
						<button
							type="button"
							onClick={() => navigate('/ShipNationwide')}
							className="rounded-full bg-[#bf8000] px-6 py-3 md:px-8 md:py-4 font-mono text-xs md:text-sm font-semibold uppercase tracking-wide text-white shadow-md"
						>
							Shop Frozen Boxes →
						</button>
					</div>
					<div className="w-full lg:w-[54%]">

						{/* REPLANCE IMAGE HERE */}
						<img
							src=""
							className="h-72 sm:h-96 w-full rounded-3xl object-cover shadow-[0_30px_70px_rgba(26,18,9,0.25)] lg:h-[40rem]"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
