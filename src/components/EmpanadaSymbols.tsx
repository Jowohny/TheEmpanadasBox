import { useEffect, useState } from "react"

interface EmpanadaSymbolsProps {
  symbol: "spicy" | "vegetarian" | "vegan" | string;
}
export const EmpanadaSymbols = ({symbol}: EmpanadaSymbolsProps) => {
	const [color, setColor] = useState('')
	const [letters, setLetters] = useState('')

	useEffect(() => {
		switch (symbol) {
			case 'spicy':
				setColor('bg-red-500')
				setLetters('S')
				break
			case 'vegetarian':
				setColor('bg-green-600')
				setLetters('VG')
				break
			case 'vegan':
				setColor('bg-green-800')
				setLetters('V')
		}
	}, [symbol])

	return (
		<div className={`flex items-center justify-center h-5 w-5 rounded-full ${color} uppercase font-bold text-[10px] text-white`}>
			{letters}
		</div>
	)
}
