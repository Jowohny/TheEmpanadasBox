import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CartDrawer from "../components/CartDrawer";
import CartIcon from "../components/CartIcon";

const VALID_SIZES = [8, 12] as const
type PackSize = typeof VALID_SIZES[number]

const isValidSize = (n: number): n is PackSize =>
	(VALID_SIZES as readonly number[]).includes(n)

const BoxBuilder = () => {
	const { size: sizeParam } = useParams<{ size: string }>()
	const navigate = useNavigate()
	const sizeNum = Number(sizeParam)
	const valid = isValidSize(sizeNum)

	useEffect(() => {
		if (!valid) navigate('/ShipNationwide', { replace: true })
	}, [valid, navigate])

	if (!valid) return null

	return (
		<div className="min-w-screen min-h-screen bg-[#faf7f2]">
			<CartIcon />
			<CartDrawer />

			<div className="px-20 pt-12 pb-20">
				<div className="mx-auto max-w-[90rem]">
					<button
						type="button"
						onClick={() => navigate('/ShipNationwide')}
						className="mb-10 inline-flex items-center gap-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-[#6f6255]"
					>
						← Back to menu
					</button>

					<div className="max-w-3xl">
						<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
							Custom Build
						</p>
						<h1 className="mb-4 font-inter text-7xl font-black leading-[0.95] tracking-tight text-[#1a1209]">
							Build your <span className="italic text-[#D09501]">{sizeNum}-pack.</span>
						</h1>
						<div className="mb-5 h-[2px] w-12 bg-[#bf8000]" />
						<p className="text-xl font-light tracking-wide text-[#64605b]">
							Pick your flavors, watch the box fill up, then add it to your cart.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BoxBuilder
