import type { Empanada } from "../data/Empanadas";

export type CompositionEntry = { name: string; count: number }

type EmpanadaPickerProps = {
	empanadas: Empanada[]
	composition: CompositionEntry[]
	autofill: boolean
	packSize: number
	onClickEmpanada: (name: string) => void
	onDecrement: (name: string) => void
	onToggleAutofill: () => void
	onCommit: () => void
}

const EmpanadaPicker = ({
	empanadas,
	composition,
	autofill,
	packSize,
	onClickEmpanada,
	onDecrement,
	onToggleAutofill,
	onCommit
}: EmpanadaPickerProps) => {
	const totalSlots = composition.reduce((sum, c) => sum + c.count, 0)
	const isFull = totalSlots >= packSize
	const distinctFull = composition.length >= packSize

	return (
		<div className="flex flex-col gap-6">
			<div className="rounded-[1.5rem] border border-[#ede5d8] bg-white p-6 shadow-sm">
				<button
					type="button"
					onClick={onToggleAutofill}
					className="flex w-full items-center justify-between text-left"
				>
					<div>
						<p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#bf8000]">
							Autofill
						</p>
						<p className="mt-1 text-sm font-light text-[#5f5449]">
							{autofill
								? 'Split evenly across your picks.'
								: 'Fill the box slot by slot.'}
						</p>
					</div>
					<span
						className={`relative inline-block h-7 w-12 shrink-0 rounded-full transition-colors ${
							autofill ? 'bg-[#fec32f]' : 'bg-[#d9cdbf]'
						}`}
					>
						<span
							className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
								autofill ? 'translate-x-6' : 'translate-x-1'
							}`}
						/>
					</span>
				</button>
			</div>

			{isFull && autofill && (
				<div className="rounded-xl bg-[#fec32f]/15 px-4 py-3 font-mono text-[11px] font-medium leading-relaxed text-[#765600]">
					Pack is full. Turn off autofill to fine-tune slot-by-slot.
				</div>
			)}

			<div className="grid grid-cols-2 gap-3">
				{empanadas.map((empanada) => {
					const entry = composition.find((c) => c.name === empanada.name)
					const count = entry?.count ?? 0
					const isPicked = count > 0
					const cannotAdd = autofill
						? !isPicked && distinctFull
						: isFull

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
								disabled={cannotAdd}
								className={`flex w-full items-center gap-3 p-3 text-left disabled:cursor-not-allowed ${
									cannotAdd ? 'opacity-40' : ''
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
									{autofill ? (
										<>× {count}</>
									) : (
										<>
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
											<span className="min-w-[1ch] text-center">{count}</span>
										</>
									)}
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
