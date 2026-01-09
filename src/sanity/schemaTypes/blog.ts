import { defineField, defineType } from "sanity";

export default defineType({
	name: "blog",
	title: "Blog",
	type: "document",

	fields: [
		// ---------------- TITLE ----------------
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),

		// ---------------- SLUG ----------------
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),

		// ---------------- EXCERPT ----------------
		defineField({
			name: "excerpt",
			title: "Excerpt",
			type: "text",
			rows: 3,
		}),

		// ---------------- COVER IMAGE ----------------
		defineField({
			name: "coverImage",
			title: "Cover Image",
			type: "image",
			options: { hotspot: true },
		}),

		// ---------------- CONTENT ----------------
		defineField({
			name: "content",
			title: "Content",
			type: "array",
			of: [
				{ type: "block" },
				{
					type: "code",
					options: {
						withFilename: true,
					},
				},
			],
		}),

		// ---------------- CATEGORIES ----------------
		defineField({
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "string" }],
		}),

		// ---------------- TAGS ----------------
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "string" }],
		}),

		// ---------------- AUTHOR ----------------
		defineField({
			name: "author",
			title: "Author",
			type: "object",
			fields: [
				{ name: "name", type: "string", title: "Name" },
				{ name: "role", type: "string", title: "Role" },
				{ name: "bio", type: "text", title: "Bio" },
				{
					name: "image",
					type: "image",
					title: "Image",
					options: { hotspot: true },
				},
				{ name: "profileUrl", type: "url", title: "Profile URL" },
				{ name: "twitterUrl", type: "url", title: "Twitter URL" },
			],
		}),

		// ---------------- FEATURED ----------------
		defineField({
			name: "featured",
			title: "Featured",
			type: "boolean",
			initialValue: false,
		}),

		// ---------------- PUBLISHED DATE ----------------
		defineField({
			name: "publishedAt",
			title: "Published At",
			type: "datetime",
		}),
	],

	preview: {
		select: {
			title: "title",
			media: "coverImage",
		},
	},
});
