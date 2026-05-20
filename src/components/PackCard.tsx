import { useNavigate } from "react-router-dom";
import type { CustomPack } from "../data/ShipProducts";

type PackCardProps = {
	pack: CustomPack
}

const PackCard = ({ pack }: PackCardProps) => {
	const navigate = useNavigate()

	return (
		<div className="flex flex-col overflow-hidden rounded-[1.5rem] border border-[#ede5d8] bg-white shadow-sm">
			<div className="relative h-72 w-full overflow-hidden">
				<img
					src={pack.image}
					loading="lazy"
					className="h-full w-full object-cover"
				/>
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1209] via-[#1a1209]/40 to-transparent" />
				<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
					<p className="mb-2 font-mono text-xs font-black uppercase tracking-[0.24em] text-[#fec32f]">
						Custom Boxes
					</p>
					<h3 className="font-inter text-4xl font-black leading-tight tracking-tight">
						{pack.name}
					</h3>
				</div>
			</div>
			<div className="flex flex-1 flex-col gap-5 p-7">
				<p className="text-base font-light leading-relaxed text-[#5f5449]">
					{pack.description}
				</p>
				<button
					type="button"
					onClick={() => navigate(`/ShipNationwide/build/${pack.size}`)}
					className="mt-auto self-start rounded-full border-2 border-black/20 bg-[#bf8000] px-7 py-3 font-mono text-xs font-black uppercase tracking-[0.18em] text-white shadow-md"
				>
					Build {pack.size}-Pack →
				</button>
			</div>
		</div>
	)
}

export default PackCard
