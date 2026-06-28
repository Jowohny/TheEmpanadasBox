import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FooterLinks from '../data/FooterNav';
import NavLinks from '../data/NavLinks';

const Navbar = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const activeTab = NavLinks.find((link) => {
		if (link.path === '/') return pathname === '/'
		return pathname === link.path || pathname.startsWith(link.path + '/')
	})?.label
	const moreLinks = FooterLinks.filter(
		(f) => !NavLinks.some((n) => n.path === f.path)
	)
	const isMoreActive = moreLinks.some((link) => {
		if (link.path === '/') return pathname === '/'
		return pathname === link.path || pathname.startsWith(link.path + '/')
	})

	const [moreOpen, setMoreOpen] = useState(false)
	const moreRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!moreOpen) return
		const onClick = (e: MouseEvent) => {
			if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
				setMoreOpen(false)
			}
		}
		document.addEventListener('mousedown', onClick)
		return () => document.removeEventListener('mousedown', onClick)
	}, [moreOpen])

	useEffect(() => {
		setMoreOpen(false)
		window.scrollTo(0,0)
	}, [pathname])

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
							onClick={() => navigate(tab.path)}
							className={
								`relative font-mono font-medium tracking-wide text-md px-5 py-2 rounded-full hover:bg-[#bf8000]/10 hover:text-[#bf8000] transition-all duration-200
								${activeTab === tab.label ? 'bg-[#c09100]/20 text-[#bf8000] border-[0.5px] border-[#bf8000]' : 'text-[#3a3020]'}`
							}
						>
							{tab.label}
						</button>
					))}

					<div ref={moreRef} className='relative'>
						<button
							type='button'
							onClick={() => setMoreOpen((v) => !v)}
							className={
								`relative font-mono font-medium tracking-wide text-md px-5 py-2 rounded-full hover:bg-[#bf8000]/10 hover:text-[#bf8000] transition-all duration-200
								${isMoreActive ? 'bg-[#c09100]/20 text-[#bf8000] border-[0.5px] border-[#bf8000]' : 'text-[#3a3020]'}`
							}
						>
							More
							<span className={`ml-2 inline-block font-mono text-xs transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`}>
								▾
							</span>
						</button>

						{moreOpen && (
							<div className='absolute left-0 top-full mt-2 min-w-[12rem] rounded-2xl border border-[#e8dfd0] bg-white/95 backdrop-blur-2xl py-2 z-50'>
								{moreLinks.map((link) => {
									const linkActive =
										link.path === '/'
											? pathname === '/'
											: pathname === link.path || pathname.startsWith(link.path + '/')
									return (
										<button
											key={link.label}
											type='button'
											onClick={() => {
												navigate(link.path)
												setMoreOpen(false)
											}}
											className={
												`block w-full text-left font-mono font-medium tracking-wide text-md px-5 py-2 hover:bg-[#bf8000]/10 hover:text-[#bf8000] transition-colors duration-150
												${linkActive ? 'text-[#bf8000]' : 'text-[#3a3020]'}`
											}
										>
											{link.label}
										</button>
									)
								})}
							</div>
						)}
					</div>
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
		</>
	)
}

export default Navbar
