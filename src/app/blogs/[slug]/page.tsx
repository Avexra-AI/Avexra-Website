import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Background from "@/components/layout/Background";
import ReadingProgress from "@/components/common/ReadingProgress";

import BlogHeader from "@/components/blogs/detail/BlogHeader";
import BlogCover from "@/components/blogs/detail/BlogCover";
import BlogContent from "@/components/blogs/detail/BlogContent";
import BlogShare from "@/components/blogs/detail/BlogShare";
import BlogInlineCTA from "@/components/blogs/detail/BlogInlineCTA";
import BlogTags from "@/components/blogs/detail/BlogTags";
import BlogAuthor from "@/components/blogs/detail/BlogAuthor";
import RelatedBlogs from "@/components/blogs/detail/RelatedBlogs";

import { blogs } from "@/data/blogs";
import { getBlogBySlug, getRelatedBlogs, calculateReadTime } from "@/lib/blogs";

/* ---------------- PAGE PROPS ---------------- */
interface PageProps {
	params: Promise<{
		slug: string;
	}>;
}

/* ---------------- PAGE ---------------- */
export default async function BlogDetailPage({ params }: PageProps) {
	const { slug } = await params;

	const blog = getBlogBySlug(blogs, slug);
	if (!blog) notFound();

	const readTime = calculateReadTime(blog.content ?? []);
	const relatedBlogs = getRelatedBlogs(blogs, blog.slug, blog.categories ?? []);

	return (
		<>
			<Navbar />
			<ReadingProgress />
			<Background />

			<main className="relative z-10 w-full flex flex-col items-center">
				{/* HEADER */}
				<BlogHeader
					title={blog.title}
					category={blog.categories?.[0] ?? "Blog"}
					breadcrumb={[
						{ label: "Blog", href: "/blogs" },
						...(blog.categories?.[0]
							? [
									{
										label: blog.categories[0],
										href: `/blogs?category=${encodeURIComponent(
											blog.categories[0]
										)}`,
									},
							  ]
							: []),
						{ label: blog.title },
					]}
					author={{
						name: blog.author?.name ?? "Unknown Author",
						role: blog.author?.role,
						image: blog.author?.image,
					}}
					publishedAt={blog.publishedAt}
					readTime={readTime}
				/>

				{/* COVER */}
				{blog.coverImage && (
					<BlogCover image={blog.coverImage} alt={blog.title} />
				)}

				{/* BODY */}
				<div className="w-full max-w-[1200px] px-6 md:px-10 flex flex-col lg:flex-row gap-12 pb-20 relative">
					{/* SHARE BAR */}
					<BlogShare title={blog.title} />

					<article className="flex-1 max-w-[760px] mx-auto">
						<BlogContent content={blog.content ?? []} />

						<BlogInlineCTA
							title="Bu      ild smarter systems."
							description="Get our weekly 'Architecture for AI' digest delivered to your inbox. No fluff, just code and strategy."
							buttonText="Subscribe"
						/>

						{(blog.tags ?? []).length > 0 && <BlogTags tags={blog.tags ?? []} />}

						{blog.author && (
							<BlogAuthor
								author={{
									name: blog.author.name,
									bio: blog.author.bio,
									image: blog.author.image,
									profileUrl: blog.author.profileUrl,
									twitterUrl: blog.author.twitterUrl,
								}}
							/>
						)}
					</article>
				</div>

				{/* RELATED BLOGS */}
				{relatedBlogs.length > 0 && (
					<RelatedBlogs
						blogs={relatedBlogs.map((b) => ({
							title: b.title,
							slug: b.slug,
							category: b.categories?.[0] ?? "Blog",
							readTime: calculateReadTime(b.content ?? []),
							coverImage: b.coverImage,
						}))}
					/>
				)}
			</main>

			<Footer />
		</>
	);
}
