import { useLocation, useNavigate } from 'react-router-dom';
import FooterLinks from '../data/FooterNav';
import SocialMedia from '../data/Media';

const Footer = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const activeTab = FooterLinks.find((link) => {                                                                                                       
		if (link.path === '/') return pathname === '/'                                                                                                  
	 	return pathname === link.path || pathname.startsWith(link.path + '/')                                                                           
	})?.label  

	return (
		<div className="bg-[#1a1209] text-[#faf7f2]">
			<div className="flex flex-col md:flex-row p-6 md:p-10 lg:p-12 gap-10 md:gap-8 items-start justify-around">
				<div className="max-w-full md:max-w-1/3 lg:max-w-1/4">
					<button
						type="button"
						onClick={() => navigate('/')}
						className="group flex items-center gap-3 text-left"
					>
						<img src="/empanadasboxlogo.png" style={{ filter: 'invert(50%)' }} className="h-12 w-12 lg:h-14 lg:w-14 transition-transform duration-200 group-hover:scale-105" />
						<span className="font-inter text-lg lg:text-xl font-bold tracking-wide">The Empanadas Box</span>
					</button>
					<p className="mt-4 font-mono text-xs md:text-sm text-[#faf7f2]/65">
						The only box that takes you around the world in five bites.
					</p>
					<div className="mt-5 h-[1px] w-16 bg-[#bf8000]" />
				</div>

				<div>
					<p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2rem] text-[#fec32f]">
						Pages
					</p>
					<ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-8">
						{FooterLinks.map((item) => (
							<li key={item.path} className="mb-2 break-inside-avoid">
								<button
									type="button"
									onClick={() => {navigate(item.path)}}
									className={
										`inline-block font-mono text-sm transition-all duration-200 hover:translate-x-0.5 hover:text-[#fec32f]
										${activeTab === item.label ? 'text-[#faf7f2]/60' : 'text-[#faf7f2]'}`
									}
								>
									{item.label}
								</button>
							</li>
						))}
					</ul>
				</div>

				<div>
					<p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2rem] text-[#fec32f]">
						Social Media
					</p>
					<ul className='grid grid-cols-2 gap-x-6 md:gap-x-8'>
						{SocialMedia.map((media) => (
							<li key={media.name} className="mb-2">
								<button
									type="button"
									className="inline-block font-mono text-sm text-[#faf7f2]/80 transition-all duration-200 hover:translate-x-0.5 hover:text-[#fec32f]"
								>
									<a href={media.link} target="_blank" rel="noopener noreferrer">{media.name}</a>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="border-t border-white/10">
				<div className="mx-auto flex flex-col md:flex-row gap-2 md:gap-3 px-6 md:px-12 py-6 font-mono text-xs md:text-sm text-[#faf7f2]/45 items-start md:items-center md:justify-around text-left">
					<p>© {new Date().getFullYear()} The Empanadas Box. All rights reserved.</p>
					<p>Free nationwide shipping on orders over $100.</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
