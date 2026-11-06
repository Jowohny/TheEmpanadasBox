import type { StampWay } from "../data/StampWays";

type PassportStampProps = {
	stampWay: StampWay
}

const shapes = {
	round: 'h-[19cqw] w-[19cqw] rounded-full',
	rect: 'rounded-md px-[3.2cqw] py-[2.1cqw]',
	oval: 'h-[17cqw] w-[25cqw] rounded-[50%]',
}

const PassportStamp = ({ stampWay }: PassportStampProps) => {
	const { stamps, label, icon, shape, ink, x, y, rotate } = stampWay;

	return (
		<div
			data-passport-stamp={rotate}
			className={`absolute flex flex-col items-center justify-center border-2 text-center sm:border-[3px] opacity-90 mix-blend-multiply [filter:url(#stamp-ink)] ${shapes[shape]}`}
			style={{
				left: `${x}%`,
				top: `${y}%`,
				rotate: `${rotate}deg`,
				color: ink,
				borderColor: ink,
				boxShadow: shape === 'round' ? `inset 0 0 0 0.7cqw #f3ead9, inset 0 0 0 1cqw ${ink}` : undefined,
			}}
		>
			<span
				className="mb-[0.5cqw] h-[2.7cqw] w-[2.7cqw]"
				style={{ backgroundColor: ink, mask: `url(${icon}) center / contain no-repeat`, WebkitMask: `url(${icon}) center / contain no-repeat` }}
			/>
			<b className="font-inter text-[4.8cqw] font-black leading-none tracking-tight">+{stamps}</b>
			<small className="mt-[0.8cqw] hidden font-inter text-[1.55cqw] sm:block font-extrabold uppercase leading-none tracking-[0.14em]">{label}</small>
		</div>
	)
}

export default PassportStamp
