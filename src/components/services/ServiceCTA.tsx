import Link from "next/link";
interface TitlePart {
	text: string;
	highlight?: boolean;
}

interface ServiceCTAProps {
	cta: {
		titleParts: TitlePart[];
		description: string;
		primary: string;
		secondary: string;
	};
}

export default function ServiceCTA({ cta }: ServiceCTAProps) {
	return (
		<section className="py-24 px-4 relative overflow-hidden">
			{/* background layers */}
			<div className="absolute inset-0" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />

			<div className="layout-content-container max-w-[800px] mx-auto text-center relative z-10 flex flex-col items-center gap-8">
				{/* Heading */}
				<h2 className="text-text-main text-4xl md:text-5xl font-black leading-tight">
					{cta.titleParts.map((part, i) =>
						part.highlight ? (
							<span
								key={i}
								className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 relative inline-block"
							>
								{part.text}
								{/* underline svg */}
								<svg
									className="absolute w-full h-3 -bottom-2 left-0 text-primary opacity-50"
									preserveAspectRatio="none"
									viewBox="0 0 100 10"
								>
									<path
										d="M0 5 Q 50 10 100 5"
										fill="none"
										stroke="currentColor"
										strokeWidth="8"
									/>
								</svg>
							</span>
						) : (
							<span key={i}> {part.text} </span>
						)
					)}
				</h2>
				{/* Description */}
				<p className="text-text-secondary text-lg max-w-xl">
					{cta.description}
				</p>

				{/* Buttons */}
				<div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
					<Link
	href="/contact"
	className="flex items-center justify-center h-14 px-10 bg-black hover:bg-gray-800 text-white text-lg font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto"
>
	{cta.primary}
</Link>


					<a
	href="tel:+917618293495" // same number as footer
	className="flex items-center justify-center h-14 px-10 bg-white border border-border-light hover:bg-gray-50 text-text-main text-lg font-medium rounded-xl transition-all w-full sm:w-auto shadow-sm"
>
	{cta.secondary}
</a>

				</div>
			</div>
		</section>
	);
}
