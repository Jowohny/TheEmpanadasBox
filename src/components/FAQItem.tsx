import { useState } from 'react'
import type { FAQ } from '../data/FAQs'

type FAQItemProps = {
	faq: FAQ
}

const FAQItem = ({ faq }: FAQItemProps) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="border-t border-[#1a1209]/10">
			<button
				type="button"
				onClick={() => setIsOpen((v) => !v)}
				aria-expanded={isOpen}
				className="group flex w-full items-center justify-between gap-4 py-5 text-left md:gap-6 md:py-6"
			>
				<h3 className="font-inter text-lg font-black tracking-tight text-[#1a1209] transition-colors duration-200 group-hover:text-[#bf8000] md:text-xl">
					{faq.question}
				</h3>
				<span
					className={`shrink-0 font-mono text-2xl font-black text-[#bf8000] transition-transform duration-300 ease-out ${
						isOpen ? 'rotate-90' : ''
					}`}
				>
					›
				</span>
			</button>

			<div
				className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
					isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
				}`}
			>
				<div className="overflow-hidden">
					<div
						className={[
							'max-w-3xl pb-8 text-base font-light leading-relaxed text-[#64605b]',
							'transition-opacity duration-300 ease-out motion-reduce:transition-none',
							isOpen ? 'opacity-100' : 'opacity-0',
							'[&_p]:mb-3',
							'[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-3',
							'[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:mb-3',
							'[&_h4]:mt-4 [&_h4]:mb-2 [&_h4]:font-mono [&_h4]:text-xs [&_h4]:font-black [&_h4]:uppercase [&_h4]:tracking-[0.22em] [&_h4]:text-[#bf8000]',
							'[&_a]:text-[#bf8000] [&_a]:underline [&_a]:underline-offset-4',
							'[&_strong]:font-black [&_strong]:text-[#1a1209]'
						].join(' ')}
					>
						{faq.answer}
					</div>
				</div>
			</div>
		</div>
	)
}

export default FAQItem
