import CartDrawer from "../components/CartDrawer";
import CartIcon from "../components/CartIcon";
import LocationSwitcher from "../components/LocationSwitcher";

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
		</div>
	)
}

export default ShipNationwide
