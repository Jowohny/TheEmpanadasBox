import FAQItem from '../components/FAQItem'
import FAQList from '../data/FAQs'

const FAQs = () => {
	return (
		<div className="min-w-screen min-h-screen bg-[#faf7f2]">
			<div className="mx-auto max-w-[90rem] px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
				<div className="mb-10 max-w-3xl md:mb-16">
					<p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#bf8000]">
						Support
					</p>
					<h1 className="mb-4 font-inter text-4xl font-black leading-[0.95] tracking-tight text-[#1a1209] md:text-5xl lg:text-7xl">
						Frequently asked <span className="italic text-[#D09501]">questions.</span>
					</h1>
					<div className="mb-5 h-[2px] w-12 bg-[#bf8000]" />
					<p className="text-base font-light tracking-wide text-[#64605b] md:text-lg lg:text-xl">
						Heating, dietary, catering, and wholesale - covered.
					</p>
				</div>

				<div className="border-b border-[#1a1209]/10">
					{FAQList.map((faq) => (
						<FAQItem key={faq.question} faq={faq} />
					))}
				</div>
			</div>
		</div>
	)
}

export default FAQs
