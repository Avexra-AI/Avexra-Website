import { services } from "@/data/services";
import Link from "next/link";

export default function ServicesSection() {
	return (
		<section
			id="services"
			className="relative w-full font-sans text-slate-600 antialiased overflow-x-hidden pt-16 min-h-screen flex flex-col"
		>
			{/* SERVICES */}
			<section className="flex-grow flex flex-col items-center relative z-10">
				<div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-20 md:py-22">
					{/* HEADER */}
					<div className="flex flex-col items-center text-center gap-6 mb-24 max-w-4xl mx-auto fade-in-up">
						<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
							Powering the <br className="hidden md:block" />
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600">
								Autonomous Enterprise
							</span>
						</h1>

						<p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
							We architect and deploy agentic AI systems that transform how
							businesses operate, from predictive modeling to intelligent
							process automation.
						</p>
					</div>

					{/* SERVICE CARDS */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
						{services.map((service, index) => (
							<Link
								key={index}
								href={`/services/${service.slug}`}
								className="block h-full"
							>
								<div
									className={`service-card group relative p-8 rounded-3xl flex flex-col h-full fade-in-up ${service.animationDelay} cursor-pointer`}
								>
									{/* ICON */}
									<div className="mb-8 w-14 h-14 rounded-full icon-container flex items-center justify-center">
										<span
											className="material-symbols-outlined"
											style={{
												fontVariationSettings: "'wght' 400",
												fontSize: "28px",
											}}
										>
											{service.icon}
										</span>
									</div>

									{/* CONTENT */}
									<div className="flex flex-col gap-3 flex-grow">
										<h3 className="text-slate-900 text-xl font-semibold group-hover:text-primary-dark transition-colors">
											{service.title}
										</h3>
										<p className="text-slate-500 text-sm leading-relaxed">
											{service.description}
										</p>
									</div>

									{/* CTA */}
									<div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-primary-dark transition-colors">
										<span>{service.cta}</span>
										<span
											className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
											style={{
												fontVariationSettings: "'wght' 400",
												fontSize: "18px",
											}}
										>
											arrow_forward
										</span>
									</div>
								</div>
							</Link>
						))}{" "}
					</div>
				</div>
			</section>

			{/* CTA STRIP */}
			<section className="relative w-full border-t border-slate-200 bg-slate-50 rounded-full max-w-[1150px] mx-auto mb-10 z-10">
				<div className="group relative flex flex-col md:flex-row items-center justify-between gap-10 rounded-3xl bg-white border border-slate-200 p-12 overflow-hidden shadow-lg shadow-slate-200/50">
					<div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-700" />

					<div className="flex flex-col gap-4 relative z-10 max-w-xl">
						<h2 className="text-slate-900 text-3xl md:text-4xl font-bold">
							Ready to automate your enterprise?
						</h2>
						<p className="text-slate-500 text-lg">
							Let&apos;s discuss how our AI solutions can scale your business
							operations and reduce costs.
						</p>
					</div>

					<div className="relative z-10 flex-shrink-0">
						<Link href="/contact">
							<button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold transition-all">
								Book a Discovery Call
							</button>
						</Link>
					</div>
				</div>
				{/* </div> */}
			</section>
		</section>
	);
}
