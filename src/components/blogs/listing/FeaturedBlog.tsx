import Image from "next/image";
import Link from "next/link";

interface FeaturedBlogProps {
	title: string;
	slug: string;
	excerpt: string;
	category: string;
	date: string;
	readTime: string;
	image?: string;
}

export default function FeaturedBlog({
	title,
	slug,
	excerpt,
	category,
	date,
	readTime,
	image,
}: FeaturedBlogProps) {
	return (
		<section
			aria-label="Featured blog article"
			className="w-full mb-20 reveal-on-scroll delay-100"
		>
			<div className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-indigo-100/50 transition-all hover:shadow-2xl hover:shadow-indigo-200/40">
				<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[460px]">
					{/* LEFT CONTENT */}
					<div className="p-8 lg:p-12 flex flex-col justify-center relative z-10 featured-gradient">
						<div className="flex items-center gap-3 mb-6">
							<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-primary border border-indigo-100">
								<span className="relative flex h-2 w-2">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
									<span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
								</span>
								Featured Article
							</span>

							<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
								{category}
							</span>
						</div>

						<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
							{title}
						</h2>

						<p className="text-slate-600 text-lg mb-8 leading-relaxed">
							{excerpt}
						</p>

						<div className="flex items-center justify-between mt-auto">
							<div className="flex items-center gap-3">
								<div className="size-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm">
									A
								</div>

								<div className="flex flex-col">
									<span className="text-sm font-semibold text-slate-900">
										Avexra AI
									</span>
									<span className="text-xs text-slate-500">
										{date} · {readTime}
									</span>
								</div>
							</div>

							<Link
								href={`/blogs/${slug}`}
								aria-label={`Read article: ${title}`}
								className="inline-flex items-center justify-center size-12 rounded-full bg-primary text-white hover:bg-primary-dim transition-transform group-hover:scale-110 shadow-lg shadow-indigo-500/30"
							>
								<span className="material-symbols-outlined">arrow_forward</span>
							</Link>
						</div>
					</div>

					{/* RIGHT VISUAL */}
					<div className="relative bg-slate-50 overflow-hidden min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-slate-100">
						<div className="absolute inset-0 bg-grid-pattern opacity-50" />
						<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-primary/10" />

						{image ? (
							<Image
								src={image}
								alt={title}
								fill
								className="object-cover"
								priority
							/>
						) : (
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="relative size-64">
									<div className="absolute inset-0 border border-indigo-200 rounded-full animate-[spin_10s_linear_infinite]" />
									<div className="absolute inset-4 border border-dashed border-indigo-300 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

									<div className="absolute inset-12 border border-slate-200 rounded-full bg-white/50 backdrop-blur-sm shadow-xl flex items-center justify-center z-10">
										<span className="material-symbols-outlined text-6xl text-primary/80">
											smart_toy
										</span>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
