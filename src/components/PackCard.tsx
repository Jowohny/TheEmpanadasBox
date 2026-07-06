import { useNavigate } from "react-router-dom";
import type { CustomPack } from "../data/ShipProducts";

type PackCardProps = {
	pack: CustomPack
}

const PackCard = ({ pack }: PackCardProps) => {
	const navigate = useNavigate()

	return (
		<div className="flex max-w-md flex-col overflow-hidden rounded-[1.5rem] border border-[#ede5d8] bg-white shadow-sm">
			<div className="relative h-72 w-full overflow-hidden">
				<div className="absolute bottom-4 left-4 z-10">
					<p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-[#fec32f]">
						Custom Boxes
					</p>
					<h3 className="font-inter text-3xl font-black leading-tight text-white">
						For The Right Occasion
					</h3>
				</div>
				<img
					src={pack.image}
					loading="lazy"
					className="h-full w-full object-cover"
				/>
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1209] via-[#1a1209]/40 to-transparent z-0" />
			</div>
			<div className="flex flex-1 flex-col gap-3 px-7 pb-7 pt-5">
				<p className="text-base font-light leading-snug text-[#5f5449] mb-1">
					Click the button below that will take you directly to our custom empanada box creater!
				</p>
				<button
					type="button"
					onClick={() => navigate(`/ShipNationwide/build/${pack.size}`)}
					className="mt-auto self-start rounded-full border-2 border-black/20 bg-[#bf8000] px-7 py-3 font-mono text-xs font-black uppercase tracking-[0.18em] text-white shadow-md"
				>
					Build Your Box →
				</button>
			</div>
		</div>
	)
}

export default PackCard
