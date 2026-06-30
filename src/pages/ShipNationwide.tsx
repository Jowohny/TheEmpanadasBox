import CartDrawer from "../components/CartDrawer";
import CartIcon from "../components/CartIcon";
import MenuItemCard from "../components/MenuItemCard";
import PackCard from "../components/PackCard";
import { CustomPacks, PresetBoxes, Sauces } from "../data/ShipProducts";

const SectionLabel = ({ children }: { children: string }) => (
	<div className="pt-2">
		<p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
			{children}
		</p>
		<div className="mt-2 h-[1px] w-12 bg-[#bf8000]/40" />
	</div>
)

const ShipNationwide = () => {
	return (
		<div className="min-w-screen min-h-screen bg-[#faf7f2]">
			<CartIcon />
			<CartDrawer />

			<div className="mx-auto max-w-[90rem] px-20 py-20">
				<div className="mb-20 max-w-3xl">
					<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
						Ship Nationwide
					</p>
					<h1 className="mb-4 font-inter text-7xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
						Freezer freight, <br />
						<span className="italic text-[#D09501]">worldwide.</span>
					</h1>
					<div className="mb-5 h-[2px] w-12 bg-[#bf8000]" />
					<p className="text-xl font-light tracking-wide text-[#64605b]">
						Pick a pack, build your box, and send our empanadas right to your doorstep!
					</p>
				</div>

				<div className="grid grid-cols-[180px_1fr] gap-x-10 gap-y-16">
					<SectionLabel>Custom Boxes</SectionLabel>
					<div className="grid grid-cols-2 gap-6">
						{CustomPacks.map((pack) => (
							<PackCard key={pack.id} pack={pack} />
						))}
					</div>

					<SectionLabel>Sampler Boxes</SectionLabel>
					<div className="grid grid-cols-3 gap-6">
						{PresetBoxes.map((box) => (
							<MenuItemCard key={box.id} product={box} />
						))}
					</div>

					<SectionLabel>Sauces</SectionLabel>
					<div className="grid grid-cols-2 gap-6">
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
