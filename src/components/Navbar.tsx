import { useNavigate } from 'react-router-dom';
import FooterLinks from '../data/NavLinks';

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className='min-w-full h-[5.5rem] flex flex-row items-center justify-between px-6 bg-white/60 backdrop-blur-2xl'>
				<div onClick={() => navigate('/')} className='flex flex-row items-center gap-3'>
					<img src='/empanadasboxlogo.png' className='w-14 h-14 aspect-square rounded-xl' />
					<h1 className='font-black text-xl tracking-wide text-[#1a1209]'>The Empanadas Box</h1>
				</div>

				<div className='flex flex-row items-center gap-2'>
					{FooterLinks.map((tab) => (
						<button key={tab.label} onClick={() => navigate(tab.path)}
							className='relative font-mono font-medium tracking-wide text-md text-[#3a3020] px-5 py-2 rounded-full hover:bg-[#bf8000]/10 hover:text-[#bf8000] transition-all duration-200'
						>
							{tab.label}
						</button>
					))}
				</div>

				<div className='flex flex-row items-center gap-3'>
					<button
						type="button"
						className='bg-[#bf8000] rounded-full font-mono font-semibold tracking-wider text-sm text-white px-7 py-3 shadow-md border-2 border-black/10 uppercase hover:bg-[#a06b00] transition-all duration-200'
					>
						Shop Now →
					</button>
				</div>
			</div>
			<div className='h-2 bg-linear-to-b from-white/60 to-transparent backdrop-blur-2xl'/>
		</>
	)
}

export default Navbar