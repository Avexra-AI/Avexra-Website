import Image from "next/image";

interface UseCase {
	tag: string;
	title: string;
	description: string;
	image: string;
	tools?: string[];
}

interface ServiceUseCasesProps {
	useCases: UseCase[];
}

export default function ServiceUseCases({ useCases }: ServiceUseCasesProps) {
	return (
		<section className="py-24 px-4 relative">
			{/* top divider */}
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />

			<div className="layout-content-container max-w-[1000px] mx-auto flex flex-col gap-16 ">
				{/* Section title */}
				<div className="flex items-center gap-6 mb-4">
					<div className="h-px bg-black/10 flex-grow" />
					<h2 className="text-text-main text-2xl font-bold tracking-tight px-6 border border-black/5 rounded-full py-2 bg-background-light shadow-sm">
						Business Use Cases
					</h2>
					<div className="h-px bg-black/10 flex-grow" />
				</div>

				{/* Use cases */}
				{useCases.map((useCase, index) => {
					const reverse = index % 2 !== 0;

					return (
						<div
							key={index}
							className={`group flex flex-col ${
								reverse ? "md:flex-row-reverse" : "md:flex-row"
							} gap-8 bg-surface-light rounded-2xl p-6 border border-border-light shadow-soft hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500`}
						>
							{/* Image */}
							<div className="w-full md:w-2/5 aspect-video md:aspect-auto rounded-xl overflow-hidden bg-gray-100 relative">
								<Image
									src={useCase.image}
									alt={useCase.title}
									fill
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-110 contrast-95 saturate-50 group-hover:saturate-100"
								/>
								<div className="absolute inset-0 bg-black/10" />
							</div>

							{/* Content */}
							<div className="flex flex-col justify-center flex-1 gap-4 mt-10 p-2">
								{/* Tag */}
								<div className="flex items-center gap-2">
									<span className="px-2.5 py-1 rounded text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100 tracking-wider">
										{useCase.tag}
									</span>
								</div>

								<h3 className="text-text-main text-2xl font-bold group-hover:text-blue-700 transition-colors">
									{useCase.title}
								</h3>

								<p className="text-text-secondary leading-relaxed text-base">
									{useCase.description}
								</p>

								{/* Tools */}
								{useCase.tools && (
									<div className="flex flex-wrap gap-2 mt-2">
										{useCase.tools.map((tool, i) => (
											<span
												key={i}
												className="text-xs text-text-secondary font-medium bg-gray-100 px-5 py-1.5 mb-10 rounded-full border border-gray-200"
											>
												{tool}
											</span>
										))}
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
