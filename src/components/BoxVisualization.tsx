import type { Empanada } from "../data/Empanadas";

type BoxVisualizationProps = {
	slots: Array<string | null>
	empanadas: Empanada[]
	onClear: () => void
}

const BoxVisualization = ({ slots, empanadas, onClear }: BoxVisualizationProps) => {
	const lookup = new Map(empanadas.map((e) => [e.name, e]))
	const hasPicks = slots.some((s) => s !== null)

	return (
		<div className="relative h-fit rounded-[1.5rem] border border-[#ede5d8] bg-white p-6 pb-16 shadow-sm">
			<div className={`w-full text-center font-black absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-8xl font-playfair px-8 z-10 ${hasPicks ? 'hidden' : 'opacity-20'}`}>
				Select a flavor to start filling your box!
			</div>
			<div className={`${hasPicks ? '' : 'opacity-60'}`}>
				<div className="mb-4 flex items-center justify-between">
					<p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">
						Your Box
					</p>
					<p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#8a6f45]">
						{slots.filter((s) => s !== null).length*4} / {slots.length*4} filled
					</p>
				</div>
				<div className="grid grid-cols-3 gap-3">
					{slots.map((slotName, i) => {
						const empanada = slotName ? lookup.get(slotName) : null
						return (
							<div
								key={i}
								className="relative aspect-square overflow-hidden rounded-xl bg-[#f5efe6]"
							>
								{empanada ? (
									<>
										<img
											src={empanada.image}
											className="h-full w-full object-cover"
										/>
										<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1209]/85 via-[#1a1209]/20 to-transparent" />
										<p className="absolute bottom-0 left-0 right-0 px-2 pb-2 font-mono text-[10px] font-black uppercase leading-tight tracking-[0.14em] text-white">
											{empanada.name}
										</p>
									</>
								) : (
									<div className="flex h-full w-full items-center justify-center">
										<div className="h-10 w-10 rounded-full border-2 border-dashed border-[#d9cdbf]" />
									</div>
								)}
							</div>
						)
					})}
				</div>
				<div className="absolute bottom-4 right-4">
					<button
						type="button"
						onClick={onClear}
						disabled={!hasPicks}
						className="font-mono font-black uppercase tracking-widest text-[#8a6f45] disabled:cursor-not-allowed disabled:opacity-30"
					>
						Clear All Empanadas
					</button>
				</div>
			</div>
		</div>
	)
}

export default BoxVisualization
