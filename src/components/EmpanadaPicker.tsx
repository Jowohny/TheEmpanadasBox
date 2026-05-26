import type { Empanada } from "../data/Empanadas";

export type CompositionEntry = { name: string; count: number }

type EmpanadaPickerProps = {
	empanadas: Empanada[]
	composition: CompositionEntry[]
	packSize: number
	onClickEmpanada: (name: string) => void
	onDecrement: (name: string) => void
	onCommit: () => void
}

const STEP = 4

const EmpanadaPicker = ({
	empanadas,
	composition,
	packSize,
	onClickEmpanada,
	onDecrement,
	onCommit
}: EmpanadaPickerProps) => {
	const totalSlots = composition.reduce((sum, c) => sum + c.count, 0)
	const isFull = totalSlots >= packSize
	const cannotAddMore = totalSlots + STEP > packSize

	return (
		<div className="flex flex-col gap-6">
			<div className="rounded-[1.5rem] border border-[#ede5d8] bg-white p-5 shadow-sm">
				<p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">
					Pick Your Flavors
				</p>
				<p className="mt-1 text-sm font-light text-[#5f5449]">
					Each pick adds {STEP} empanadas of that flavor.
				</p>
			</div>

			<div className="grid grid-cols-2 gap-3">
				{empanadas.map((empanada) => {
					const entry = composition.find((c) => c.name === empanada.name)
					const count = entry?.count ?? 0
					const isPicked = count > 0
					const disabled = cannotAddMore

					return (
						<div
							key={empanada.name}
							className={`relative overflow-hidden rounded-xl border bg-white transition-shadow ${
								isPicked ? 'border-[#bf8000] shadow-md' : 'border-[#ede5d8]'
							}`}
						>
							<button
								type="button"
								onClick={() => onClickEmpanada(empanada.name)}
								disabled={disabled}
								className={`flex w-full items-center gap-3 p-3 text-left disabled:cursor-not-allowed ${
									disabled ? 'opacity-40' : ''
								}`}
							>
								<img
									src={empanada.image}
									className="h-14 w-14 shrink-0 rounded-lg object-cover"
								/>
								<div className="flex flex-1 flex-col">
									<h4 className="font-inter text-sm font-black leading-tight text-[#1a1209]">
										{empanada.name}
									</h4>
									<p className="mt-0.5 text-[11px] font-light leading-snug text-[#6f5e48]">
										{empanada.description}
									</p>
								</div>
							</button>

							{isPicked && (
								<div className="absolute right-2 top-2 inline-flex items-center gap-2 rounded-full bg-[#1a1209] px-3 py-1 font-mono text-[10px] font-black text-[#fec32f]">
									<button
										type="button"
										onClick={(e) => {
											e.stopPropagation()
											onDecrement(empanada.name)
										}}
										className="text-[#fec32f] scale-x-[2]"
									>
										-
									</button>
									<span className="min-w-[1ch] text-center"> x{count}</span>
								</div>
							)}
						</div>
					)
				})}
			</div>

			<button
				type="button"
				onClick={onCommit}
				disabled={!isFull}
				className="w-full rounded-full border-2 border-black/20 bg-[#bf8000] px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wide text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
			>
				{isFull ? 'Add Box to Cart →' : `Fill ${packSize - totalSlots} more to add`}
			</button>
		</div>
	)
}

export default EmpanadaPicker
