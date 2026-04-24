import type { Empanada } from "../data/Empanadas";

type EmpanadaCardProps = {
	empanada: Empanada
}

const EmpanadaCard = ({ empanada }: EmpanadaCardProps) => {
	return (
		<div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-[#ede5d8] w-1/4 shrink-0">
			<div className="bg-[#f5efe6] p-5">
				<img src={empanada.image} loading="lazy" className="w-full object-contain aspect-[4/3] rounded-xl" />
			</div>
			<div className="py-4 px-5 flex flex-col gap-1 h-40">
				<p className="text-xs font-medium tracking-widest uppercase text-[#bf8000]">Signature Flavor</p>
				<h1 className="font-bold tracking-wide font-inter text-xl text-[#1a1209]">{empanada.name}</h1>
				{empanada.description && (
					<p className="text-sm text-[#6f5e48]">{empanada.description}</p>
				)}
				{empanada.tags && (
					<div className="flex flex-wrap gap-2 mt-1">
						{empanada.tags.map((tag: string) => (
							<span key={tag} className="text-[10px] tracking-wide uppercase bg-[#f8f2e9] text-[#8a6f45] border border-[#e9dece] px-2 py-1 rounded-full">
								{tag}
							</span>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default EmpanadaCard