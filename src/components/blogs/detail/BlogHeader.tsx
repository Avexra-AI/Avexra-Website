import Link from "next/link";

interface BlogHeaderProps {
	title: string;
	category: string;
	breadcrumb?: {
		label: string;
		href?: string;
	}[];
	publishedAt: string;
	readTime: string;
}

export default function BlogHeader({
	title,
	category,
	breadcrumb = [],
	publishedAt,
	readTime,
}: BlogHeaderProps) {
	return (
		<section className="w-full max-w-[960px] mt-20 px-6 md:px-10 py-10 md:py-16 flex flex-col gap-6">
			{/* Breadcrumb */}
			<div className="flex flex-wrap gap-2 items-center text-sm">
				{breadcrumb.map((item, index) => (
					<div key={index} className="flex items-center gap-2">
						{item.href ? (
							<Link
								href={item.href}
								className="text-text-muted hover:text-primary transition-colors"
							>
								{item.label}
							</Link>
						) : (
							<span className="text-text-main font-medium truncate max-w-[200px] md:max-w-none">
								{item.label}
							</span>
						)}
						{index < breadcrumb.length - 1 && (
							<span className="text-text-muted opacity-50">/</span>
						)}
					</div>
				))}
			</div>

			{/* Category pill */}
			<div className="flex flex-col gap-6">
				<div className="inline-flex">
					<div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-surface-light border border-border-light px-4 shadow-sm">
						<span className="size-2 rounded-full bg-primary animate-pulse" />
						<p className="text-text-main text-xs font-bold uppercase tracking-wider">
							{category}
						</p>
					</div>
				</div>

				{/* Title */}
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.02em] text-text-main bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
					{title}
				</h1>

				{/* Author */}
				<div className="flex items-center gap-4 mt-2">
					<div className="size-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm shadow-sm">
						A
					</div>

					<div className="flex flex-col">
						<p className="text-text-main font-bold text-sm">Avexra AI</p>
						<p className="text-text-muted text-xs">
							{publishedAt} • {readTime}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
