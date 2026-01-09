import Link from "next/link";

interface BlogTagsProps {
	tags: string[];
}

export default function BlogTags({ tags }: BlogTagsProps) {
	if (!tags || tags.length === 0) return null;

	return (
		<section aria-label="Blog tags" className="mt-12 flex flex-wrap gap-2">
			{tags.map((tag, index) => (
				<Link
					key={`${tag}-${index}`}
					href={`/blogs?tag=${encodeURIComponent(tag)}`}
					className="px-4 py-1.5 rounded-full bg-white border border-border-light text-sm text-slate-600 hover:border-primary hover:text-primary transition-colors shadow-sm"
				>
					#{tag}
				</Link>
			))}
		</section>
	);
}
