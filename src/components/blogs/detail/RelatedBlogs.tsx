import Image from "next/image";
import Link from "next/link";
interface RelatedBlog {
	title: string;
	slug: string;
	category: string;
	readTime: string;
	coverImage?: string;
}

interface RelatedBlogsProps {
	blogs: RelatedBlog[];
}

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
	if (!blogs || blogs.length === 0) return null;

	const uniqueBlogs = Array.from(
		new Map(blogs.map((blog) => [blog.slug, blog])).values()
	);

	return (
		<section className="w-full bg-white border-t border-border-light py-20 relative overflow-hidden">
			<div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

			<div className="max-w-[1200px] mx-auto px-6 md:px-10">
				{/* Header */}
				<div className="flex justify-between items-end mb-10">
					<div>
						<h3 className="text-2xl font-bold text-text-main mb-2">
							Read Next
						</h3>
						<p className="text-slate-600">
							More insights on AI architecture and automation.
						</p>
					</div>

					<Link
						href="/blogs"
						className="hidden md:flex items-center gap-2 text-primary font-bold hover:translate-x-1 transition-transform"
					>
						View all posts
						<span className="material-symbols-outlined text-sm">
							arrow_forward
						</span>
					</Link>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{uniqueBlogs.map((blog) => (
						<Link
							key={blog.slug}
							href={`/blogs/${blog.slug}`}
							className="group flex flex-col gap-4"
						>
							{/* Image / Placeholder */}
							<div className="aspect-[16/10] w-full rounded-xl overflow-hidden relative shadow-soft border border-border-light bg-slate-50">
								<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors z-10" />

								{blog.coverImage ? (
									<Image
										src={blog.coverImage}
										alt={blog.title}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-500"
									/>
								) : (
									<div className="absolute inset-0 flex items-center justify-center text-indigo-500 transform group-hover:scale-110 transition-transform duration-500">
										<svg
											width="36"
											height="36"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											className="opacity-70"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									</div>
								)}
							</div>

							{/* Meta */}
							<div className="flex flex-col gap-2">
								<div className="flex items-center gap-2 text-xs font-medium text-primary">
									<span>{blog.category}</span>
									<span>•</span>
									<span>{blog.readTime}</span>
								</div>

								<h4 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors leading-tight">
									{blog.title}
								</h4>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
