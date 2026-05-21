import CartDrawer from "../components/CartDrawer";
import CartIcon from "../components/CartIcon";
import LocationSwitcher from "../components/LocationSwitcher";
import MenuItemCard from "../components/MenuItemCard";
import PackCard from "../components/PackCard";
import { CustomPacks, PresetBoxes, Sauces } from "../data/ShipProducts";

const ShipNationwide = () => {
	return (
		<div className="min-w-screen min-h-screen">
			<CartIcon />
			<CartDrawer />

			<div className="bg-[#faf7f2] px-20 pt-16 pb-20">
				<div className="mx-auto max-w-[90rem]">
					<div className="mb-14 flex items-center">
						<LocationSwitcher />
					</div>

					<div className="max-w-3xl">
						<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Ship Nationwide
						</p>
						<h1 className="mb-4 font-inter text-7xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Freezer freight, <br />
							<span className="italic text-[#D09501]">worldwide.</span>
						</h1>
						<div className="mb-5 h-[2px] w-12 bg-[#bf8000]" />
						<p className="text-xl font-light tracking-wide text-[#64605b]">
							Pick a pack, build a box, send our world tour to your freezer — anywhere in the country.
						</p>
					</div>
				</div>
			</div>

			<div className="bg-[#faf7f2] px-20 pb-24 pt-12">
				<div className="mx-auto max-w-[90rem]">
					<div className="mx-auto mb-14 max-w-3xl text-center">
						<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Custom Packs
						</p>
						<h2 className="mb-4 font-inter text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Pick your <span className="italic text-[#D09501]">flavors.</span>
						</h2>
						<div className="mx-auto mb-5 h-[2px] w-12 bg-[#bf8000]" />
						<p className="text-xl font-light tracking-wide text-[#64605b]">
							Two pack sizes. Mix and match all 12 flavors however you want.
						</p>
					</div>

					<div className="mx-auto grid max-w-5xl grid-cols-2 gap-8">
						{CustomPacks.map((pack) => (
							<PackCard key={pack.id} pack={pack} />
						))}
					</div>
				</div>
			</div>

			<div className="bg-[#0d0c0b] px-20 py-24">
				<div className="mx-auto max-w-[90rem]">
					<div className="mx-auto mb-14 max-w-3xl text-center">
						<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#fec32f]">
							Sampler Boxes
						</p>
						<h2 className="mb-4 font-inter text-6xl font-black leading-[0.95] tracking-tight text-[#faf7f2]">
							Skip the <span className="italic text-[#fec32f]">building.</span>
						</h2>
						<div className="mx-auto mb-5 h-[2px] w-12 bg-[#fec32f]" />
						<p className="text-xl font-light tracking-wide text-white/60">
							Pre-built boxes for when you'd rather not pick. Twelve empanadas, curated.
						</p>
					</div>

					<div className="grid grid-cols-3 gap-8">
						{PresetBoxes.map((box) => (
							<MenuItemCard key={box.id} product={box} />
						))}
					</div>
				</div>
			</div>

			<div className="bg-[#faf7f2] px-20 pb-24 pt-12">
				<div className="mx-auto max-w-[90rem]">
					<div className="mx-auto mb-14 max-w-3xl text-center">
						<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Sauces
						</p>
						<h2 className="mb-4 font-inter text-6xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Stock the <span className="italic text-[#D09501]">pantry.</span>
						</h2>
						<div className="mx-auto mb-5 h-[2px] w-12 bg-[#bf8000]" />
						<p className="text-xl font-light tracking-wide text-[#64605b]">
							Our two house sauces, jarred and shipped alongside any order.
						</p>
					</div>

					<div className="mx-auto grid max-w-4xl grid-cols-2 gap-8">
						{Sauces.map((sauce) => (
							<MenuItemCard key={sauce.id} product={sauce} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ShipNationwide
