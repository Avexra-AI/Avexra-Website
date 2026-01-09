import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
	title: string;
	slug: string;
	excerpt: string;
	category?: string;
	date: string;
	readTime: string;
	image?: string;
}

export default function BlogCard({
	title,
	slug,
	excerpt,
	category,
	date,
	readTime,
	image,
}: BlogCardProps) {
	return (
		<Link href={`/blogs/${slug}`} className="group block h-full">
			<article
				aria-label={`Blog post: ${title}`}
				className="blog-card rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer transition-shadow hover:shadow-lg"
			>
				{/* Top image */}
				<div className="h-48 bg-slate-50 relative overflow-hidden border-b border-slate-100">
					{image ? (
						<Image
							src={image}
							alt={title}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					) : (
						<div className="absolute inset-0 flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform duration-500">
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

					{/* Category badge */}
					{category && (
						<div className="absolute top-4 left-4">
							<span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-indigo-600 border border-indigo-100 shadow-sm">
								{category}
							</span>
						</div>
					)}
				</div>

				{/* Content */}
				<div className="p-6 flex-1 flex flex-col">
					<h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-snug">
						{title}
					</h3>

					<p className="text-sm text-slate-600 mb-4 line-clamp-3">{excerpt}</p>

					{/* Footer */}
					<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
						<span>{date}</span>
						<span>{readTime}</span>
					</div>
				</div>
			</article>
		</Link>
	);
}
