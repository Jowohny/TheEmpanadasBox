import type { StampWay } from "../data/StampWays";

type PassportStampProps = {
	stampWay: StampWay
}

const shapes = {
	round: 'h-36 w-36 rounded-full',
	rect: 'rounded-md px-6 py-4',
	oval: 'h-32 w-48 rounded-[50%]',
}

const PassportStamp = ({ stampWay }: PassportStampProps) => {
	const { stamps, label, icon, shape, ink, x, y, rotate } = stampWay;

	return (
		<div
			data-passport-stamp={rotate}
			className={`absolute flex flex-col items-center justify-center border-[3px] text-center opacity-90 mix-blend-multiply [filter:url(#stamp-ink)] ${shapes[shape]}`}
			style={{
				left: `${x}%`,
				top: `${y}%`,
				rotate: `${rotate}deg`,
				color: ink,
				borderColor: ink,
				boxShadow: shape === 'round' ? `inset 0 0 0 5px #f3ead9, inset 0 0 0 7px ${ink}` : undefined,
			}}
		>
			<span
				className="mb-1 h-5 w-5"
				style={{ backgroundColor: ink, mask: `url(${icon}) center / contain no-repeat`, WebkitMask: `url(${icon}) center / contain no-repeat` }}
			/>
			<b className="font-inter text-4xl font-black leading-none tracking-tight">+{stamps}</b>
			<small className="mt-1.5 font-inter text-[11px] font-extrabold uppercase leading-none tracking-[0.14em]">{label}</small>
		</div>
	)
}

export default PassportStamp
