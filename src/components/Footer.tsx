import { useNavigate } from 'react-router-dom';
import Links from '../data/Links';
import SocialMedia from '../data/Media';

const Footer = () => {
	const navigate = useNavigate()

	return (
		<div className="bg-[#1a1209] text-[#faf7f2]">
			<div className="flex flex-row p-12 items-start justify-around">
				<div className="max-w-1/4">
					<button
						type="button"
						onClick={() => navigate('/')}
						className="flex items-center gap-3 text-left"
					>
						<img src="/empanadasboxlogo.png" style={{ filter: 'invert(50%)' }} className="h-14 w-14" />
						<span className="font-inter text-xl font-bold tracking-wide">The Empanadas Box</span>
					</button>
					<p className="mt-4 font-mono text-sm text-[#faf7f2]/65">
						The only box that takes you around the world in five bites.
					</p>
					<div className="mt-5 h-[1px] w-16 bg-[#bf8000]" />
				</div>

				<div>
					<p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2rem] text-[#fec32f]">
						Pages
					</p>
					<ul className="grid grid-cols-3 gap-x-8">
						{Links.map((item) => (
							<li key={item.path} className="mb-2 break-inside-avoid">
								<button
									type="button"
									onClick={() => navigate(item.path)}
									className="font-mono text-sm text-[#faf7f2]/80"
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
					<ul>
						{SocialMedia.map((media) => (
							<li key={media.name} className="mb-2">
								<button
									type="button"
									className="font-mono text-sm text-[#faf7f2]/80"
								>
									<a href={media.link} target="_blank" rel="noopener noreferrer">{media.name}</a>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="border-t border-white/10">
				<div className="mx-auto flex flex-row gap-3 py-6 font-mono text-sm text-[#faf7f2]/45 items-center justify-around">
					<p>© {new Date().getFullYear()} The Empanadas Box. All rights reserved.</p>
					<p>Free nationwide shipping on orders over $100.</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
