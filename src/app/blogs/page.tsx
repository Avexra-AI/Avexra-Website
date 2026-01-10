"use client";

import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Background from "@/components/layout/Background";

import BlogHero from "@/components/blogs/listing/BlogHero";
import FeaturedBlog from "@/components/blogs/listing/FeaturedBlog";
import BlogTabs from "@/components/blogs/listing/BlogTabs";
import BlogGrid from "@/components/blogs/listing/BlogGrid";
import Pagination from "@/components/blogs/listing/Pagination";
import NewsletterCTA from "@/components/blogs/listing/NewsletterCTA";

import { blogs } from "@/data/blogs";
import {
	getFeaturedBlog,
	getRegularBlogs,
	getCategories,
	formatBlogDate,
	paginateBlogs,
	filterBlogsByCategory,
	filterBlogsBySearch,
	calculateReadTime,
} from "@/lib/blogs";

export default function BlogsPage() {
	const PAGE_SIZE = 6;

	// ---------------- STATE ----------------
	const [page, setPage] = useState(1);
	const [activeCategory, setActiveCategory] = useState("All Posts");
	const [search, setSearch] = useState("");

	// ---------------- DEBOUNCE ----------------
	const debouncedSearch = useDebounce(search, 300);

	// ---------------- DATA ----------------
	const featuredBlog = getFeaturedBlog(blogs);
	const regularBlogs = getRegularBlogs(blogs);
	const categories = getCategories(blogs);

	// ---------------- FILTER PIPELINE ----------------
	const categoryFilteredBlogs = filterBlogsByCategory(
		regularBlogs,
		activeCategory
	);

	const searchFilteredBlogs = filterBlogsBySearch(
		categoryFilteredBlogs,
		debouncedSearch
	);

	// ---------------- PAGINATION ----------------
	const { blogs: paginatedBlogs, totalPages } = paginateBlogs(
		searchFilteredBlogs,
		page,
		PAGE_SIZE
	);

	// ---------------- HANDLERS ----------------
	const handleCategoryChange = (category: string) => {
		setActiveCategory(category);
		setPage(1); // reset pagination
	};

	const handleSearchChange = (value: string) => {
		setSearch(value);
		setPage(1); // reset pagination
	};

	return (
		<>
			<Navbar />
			<Background />

			<main className="relative z-10 flex flex-col items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
				<BlogHero
					title="Intelligence Hub"
					subtitle="Deep dives into agentic AI, automation architectures, and the future of enterprise software."
				/>

				{featuredBlog && (
					<FeaturedBlog
						title={featuredBlog.title}
						slug={featuredBlog.slug}
						excerpt={featuredBlog.excerpt}
						category={featuredBlog.categories[0]}
						date={formatBlogDate(featuredBlog.publishedAt)}
						readTime={calculateReadTime(featuredBlog.content ?? [])}
						image={featuredBlog.coverImage}
					/>
				)}

				<BlogTabs
					categories={categories}
					activeCategory={activeCategory}
					search={search}
					onCategoryChange={handleCategoryChange}
					onSearchChange={handleSearchChange}
				/>

				<BlogGrid blogs={paginatedBlogs} />

				<Pagination
					currentPage={page}
					totalPages={totalPages}
					onPageChange={setPage}
				/>

				<NewsletterCTA />
			</main>

			<Footer />
		</>
	);
}
