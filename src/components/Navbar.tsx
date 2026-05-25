import { useNavigate } from 'react-router-dom';
import NavLinks from '../data/NavLinks';
import { useState } from 'react';

const Navbar = () => {
	const navigate = useNavigate();
	const [currentTab, setCurrentTab] = useState<string>(NavLinks[0].label)

	return (
		<>
			<div className='min-w-full h-[5.5rem] flex flex-row items-center justify-between px-6 bg-white/60 backdrop-blur-2xl'>
				<div onClick={() => navigate('/')} className='flex flex-row items-center gap-3'>
					<img src='/empanadasboxlogo.png' className='w-14 h-14 aspect-square rounded-xl' />
					<h1 className='font-black text-xl tracking-wide text-[#1a1209]'>Empanada Box</h1>
				</div>

				<div className='flex flex-row items-center gap-2'>
					{NavLinks.map((tab) => (
						<button
							key={tab.label} 
							onClick={() => {navigate(tab.path), setCurrentTab(tab.label)}}
							className={
								`relative font-mono font-medium tracking-wide text-md px-5 py-2 rounded-full hover:bg-[#bf8000]/10 hover:text-[#bf8000] transition-all duration-200
								${currentTab === tab.label ? 'bg-[#c09100]/20 text-[#bf8000] border-[0.5px] border-[#bf8000]' : 'text-[#3a3020]'}`
							}
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