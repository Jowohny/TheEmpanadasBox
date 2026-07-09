import type { Empanada } from "../data/Empanadas";
import { EmpanadaSymbols } from "./EmpanadaSymbols";

export type CompositionEntry = { name: string; count: number }

type EmpanadaPickerProps = {
	empanadas: Empanada[]
	composition: CompositionEntry[]
	packSize: number
	onClickEmpanada: (name: string) => void
	onDecrement: (name: string) => void
	onCommit: () => void
	onSurprise: () => void
}

const STEP = 4

const EmpanadaPicker = ({
	empanadas,
	composition,
	packSize,
	onClickEmpanada,
	onDecrement,
	onCommit,
	onSurprise
}: EmpanadaPickerProps) => {
	const totalSlots = composition.reduce((sum, c) => sum + c.count, 0)
	const isFull = totalSlots >= packSize
	const cannotAddMore = totalSlots + STEP > packSize

	return (
		<div className="flex flex-col gap-6">
			<div className="rounded-[1.5rem] border border-[#ede5d8] bg-white p-5 shadow-sm">
				<p className="font-mono text-sm font-black uppercase tracking-[0.2em] text-[#bf8000]">
					Pick Your Flavors
				</p>
				<p className="tracking-wide mt-1 text-[#5f5449]">
					Each pick adds {STEP} empanadas of that flavor. <br />
					To add empandas to your box, tap/click any of the cards or use the <span className="text-lg font-black leading-none">+</span> on bottom of each card. <br />
					To remove empandas from your box, use the <span className="font-black text-xl leading-none">-</span> on the bottom of each card.
				</p>
			</div>

			<div className="flex flex-row items-center gap-8 font-black text-lg">
				<div className="flex place-items-center">
					<EmpanadaSymbols symbol={'spicy'} />&nbsp;Spicy
				</div>
				<div className="flex place-items-center">
					<EmpanadaSymbols symbol={'vegetarian'} />&nbsp;Vegetarian
				</div>
				<div className="flex place-items-center">
					<EmpanadaSymbols symbol={'vegan'} />&nbsp;Vegan
				</div>
				<button
					type="button"
					onClick={onSurprise}
					className="ml-auto rounded-full border-2 border-[#bf8000] bg-white px-5 py-2 font-mono text-xs font-black uppercase tracking-[0.18em] text-[#bf8000] shadow-sm"
				>
					Surprise Me
				</button>
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
								className={`flex w-full items-center gap-3 px-3 pt-3 pb-8 text-left disabled:cursor-not-allowed ${
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

							<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 rounded-full bg-[#1a1209] px-2 py-[0.5px] font-mono text-[10px] font-black text-[#fec32f]">
								<button
									type="button"
									onClick={(e) => {
										e.stopPropagation()
										onDecrement(empanada.name)
									}}
									disabled={count === 0}
									className="text-2xl leading-none disabled:cursor-not-allowed disabled:opacity-30"
								>
									-
								</button>
								<span className="min-w-[1ch] text-center">x{count}</span>
								<button
									type="button"
									onClick={(e) => {
										e.stopPropagation()
										onClickEmpanada(empanada.name)
									}}
									disabled={cannotAddMore}
									className="text-2xl leading-none disabled:cursor-not-allowed disabled:opacity-30"
								>
									+
								</button>
							</div>

							<div className="flex absolute top-2 right-2 gap-1">
								{empanada.tags
									.filter((tag) => tag === 'spicy' || tag === 'vegetarian' || tag === 'vegan')
									.map((tag) => (
										<EmpanadaSymbols key={tag} symbol={tag} />
									))}
							</div>
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
