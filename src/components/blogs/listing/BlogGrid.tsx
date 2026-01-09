import { Blog } from "@/types/blog";
import BlogCard from "./BlogCard";
import { calculateReadTime, formatBlogDate } from "@/lib/blogs";

interface BlogGridProps {
	blogs: Blog[];
}

export default function BlogGrid({ blogs }: BlogGridProps) {
	if (!blogs || blogs.length === 0) return null;

	return (
		<section className="w-full mb-20">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{blogs.map((blog) => (
					<BlogCard
						key={blog.slug}
						title={blog.title}
						slug={blog.slug}
						excerpt={blog.excerpt}
						category={blog.categories?.[0] ?? "Blog"}
						date={formatBlogDate(blog.publishedAt)}
						readTime={
							blog.content?.length ? calculateReadTime(blog.content) : "—"
						}
						image={blog.coverImage}
					/>
				))}
			</div>
		</section>
	);
}
