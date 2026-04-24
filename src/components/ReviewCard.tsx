import type { Review } from "../data/Reviews";

type ReviewCardProps = {
	review: Review
};

const ReviewCard = ({ review }: ReviewCardProps) => {

	return (
		<a href={review.link} target="_blank" rel="noopener noreferrer">
			<div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-2 border-yellow-700/10 shadow-xl bg-white">
				<div className="relative flex flex-1 flex-col p-6">
					<div className="flex items-start justify-between gap-3">
						<div className="flex flex-1 items-center gap-3">
							<img src={review.pfp} className="h-12 w-12 rounded-full border-2 border-[#f5efe6] object-cover shadow-inner"/>
							<div className="min-w-0">
								<h2 className="font-inter text-lg font-bold tracking-tight text-[#1a1209] truncate">
									{review.name}
								</h2>
								<p className="font-mono text-xs font-semibold uppercase tracking-[0.1rem] text-[#bf8000]">
									Google review
								</p>
							</div>
						</div>
					</div>

					<div className="py-2 flex gap-0.5">
						{Array.from({ length: 5 }).map((_, i) => (
							<img key={i} src="/star.svg" className="h-5 w-5"/>
						))}
					</div>

					<p className="line-clamp-5 font-serif text-md text-[#4a4034]">
						{review.message}
					</p>

					{review.images.length > 0 && (
						<div className="mt-3 flex gap-2">
							{review.images.map((src) => (
								<img key={src} src={src} className="w-[31.5%] shrink-0 rounded-lg border border-[#ede5d8] object-cover" referrerPolicy="no-referrer"/>
							))}
						</div>
					)}
				</div>

				<div className="border-t border-[#f0ebe3] bg-gray-300/20 px-6 py-3">
					<span className="font-mono text-xs font-semibold uppercase tracking-wide text-green-900/90">
						Read full review →
					</span>
				</div>
			</div>
		</a>
	)
}

export default ReviewCard