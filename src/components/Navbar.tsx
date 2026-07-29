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
	const [mobileOpen, setMobileOpen] = useState(false)
	const moreRef = useRef<HTMLDivElement>(null)
	const navRef = useRef<HTMLDivElement>(null)

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
		if (!mobileOpen) return
		const onClick = (e: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(e.target as Node)) {
				setMobileOpen(false)
			}
		}
		document.addEventListener('mousedown', onClick)
		return () => document.removeEventListener('mousedown', onClick)
	}, [mobileOpen])

	useEffect(() => {
		setMoreOpen(false)
		setMobileOpen(false)
		window.scrollTo(0,0)
	}, [pathname])

	return (
		<div ref={navRef} className='relative'>
			<div className='min-w-full h-[5.5rem] flex flex-row items-center justify-between px-4 lg:px-6 bg-white/60 backdrop-blur-2xl'>
				<div onClick={() => navigate('/')} className='group flex flex-row items-center gap-2 lg:gap-3 cursor-pointer'>
					<img src='/empanadasboxlogo.png' className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 aspect-square rounded-xl transition-transform duration-200 group-hover:scale-105' />
					<h1 className='font-black text-base md:text-lg lg:text-xl tracking-wide text-[#1a1209]'>Empanada Box</h1>
				</div>

				<div className='hidden lg:flex flex-row items-center gap-2'>
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
							<div className='absolute xl:left-0 md:-left-24 lg:text-right top-full mt-2 min-w-[12rem] rounded-2xl border border-[#e8dfd0] bg-white/95 backdrop-blur-2xl py-2 z-50 origin-top motion-safe:animate-[dropdown-in_0.18s_ease-out]'>
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

				<div className='flex flex-row items-center gap-2 lg:gap-3'>
					<button
						type='button'
						aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
						onClick={() => setMobileOpen((v) => !v)}
						className='lg:hidden text-3xl text-[#3a3020] hover:text-[#bf8000] leading-none w-10 h-10 flex items-center justify-center'
					>
						{mobileOpen ? '✕' : '☰'}
					</button>
				</div>
			</div>

			{mobileOpen && (
				<div className='lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-[#e8dfd0] flex flex-col py-2 z-50 origin-top motion-safe:animate-[dropdown-in_0.2s_ease-out]'>
					{[...NavLinks, ...moreLinks].map((tab) => {
						const linkActive = tab.path === '/'
							? pathname === '/'
							: pathname === tab.path || pathname.startsWith(tab.path + '/')
						return (
							<button
								key={tab.label}
								type='button'
								onClick={() => {
									navigate(tab.path)
									setMobileOpen(false)
								}}
								className={
									`block w-full text-left font-mono font-medium tracking-wide text-base px-5 py-3 hover:bg-[#bf8000]/10 hover:text-[#bf8000] transition-colors duration-150
									${linkActive ? 'text-[#bf8000]' : 'text-[#3a3020]'}`
								}
							>
								{tab.label}
							</button>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default Navbar
