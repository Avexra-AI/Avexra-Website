import { Blog } from "@/types/blog";
import { extractTextFromPortableText } from "./readTime";

/* ----------------------------------------
   FEATURED / LISTING HELPERS
----------------------------------------- */

/**
 * Get featured blog (first featured)
 */
export function getFeaturedBlog(blogs: Blog[]) {
	return blogs.find((blog) => blog.featured);
}

/**
 * Get non-featured blogs
 */
export function getRegularBlogs(blogs: Blog[]) {
	return blogs.filter((blog) => !blog.featured);
}

/**
 * Format published date (UI friendly)
 */
export function formatBlogDate(date: string) {
	if (!date) return "";
	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}

/**
 * Extract unique categories (for tabs)
 */
export function getCategories(blogs: Blog[]) {
	const set = new Set<string>();

	blogs.forEach((blog) => {
		blog.categories?.forEach((cat) => set.add(cat));
	});

	return ["All Posts", ...Array.from(set)];
}

/**
 * Filter blogs by category
 */
export function filterBlogsByCategory(blogs: Blog[], category: string) {
	if (category === "All Posts") return blogs;

	return blogs.filter((blog) => blog.categories?.includes(category));
}

/**
 * Filter blogs by search query
 */
export function filterBlogsBySearch(blogs: Blog[], query: string) {
	if (!query.trim()) return blogs;

	const q = query.toLowerCase();

	return blogs.filter(
		(blog) =>
			blog.title.toLowerCase().includes(q) ||
			blog.excerpt?.toLowerCase().includes(q) ||
			blog.categories?.some((c) => c.toLowerCase().includes(q)) ||
			blog.tags?.some((t) => t.toLowerCase().includes(q))
	);
}

/**
 * Paginate blogs
 */
export function paginateBlogs(
	blogs: Blog[],
	currentPage: number,
	pageSize: number
) {
	const totalPages = Math.max(1, Math.ceil(blogs.length / pageSize));

	const start = (currentPage - 1) * pageSize;
	const end = start + pageSize;

	return {
		blogs: blogs.slice(start, end),
		totalPages,
	};
}

/* ----------------------------------------
   DETAIL PAGE HELPERS
----------------------------------------- */

/**
 * Get blog by slug (DETAIL PAGE)
 */
export function getBlogBySlug(blogs: Blog[] | undefined, slug: string) {
	if (!blogs || !Array.isArray(blogs)) return undefined;
	return blogs.find((blog) => blog.slug === slug);
}

/**
 * Get related blogs (same category → fallback)
 */
export function getRelatedBlogs(
	blogs: Blog[],
	currentSlug: string,
	categories: string[] = [],
	limit = 3
) {
	// 1️⃣ Same category, excluding current
	const related = blogs.filter(
		(blog) =>
			blog.slug !== currentSlug &&
			blog.categories?.some((c) => categories.includes(c))
	);

	// 2️⃣ Enough results
	if (related.length >= limit) {
		return related.slice(0, limit);
	}

	// 3️⃣ Fallback: recent blogs
	const fallback = blogs.filter((blog) => blog.slug !== currentSlug);

	return [...related, ...fallback].slice(0, limit);
}

/**
 * Calculate estimated read time
 */
export function calculateReadTime(content: any[]) {
	if (!Array.isArray(content)) return "1 min read";

	const text = extractTextFromPortableText(content);

	const wordsPerMinute = 200;
	const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
	const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));

	return `${minutes} min read`;
}
