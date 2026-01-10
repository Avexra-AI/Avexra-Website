import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
	name: "post",
	title: "Post",
	type: "document",
	icon: DocumentTextIcon,

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

		// ---------------- EXCERPT (LISTING) ----------------
		defineField({
			name: "excerpt",
			title: "Excerpt",
			type: "text",
			rows: 3,
			validation: (Rule) => Rule.required().max(160),
		}),

		// ---------------- FEATURED ----------------
		defineField({
			name: "featured",
			title: "Featured Post",
			type: "boolean",
			initialValue: false,
		}),

		// ---------------- COVER IMAGE ----------------
		defineField({
			name: "coverImage",
			title: "Cover Image",
			type: "image",
			options: { hotspot: true },
			fields: [
				defineField({
					name: "alt",
					title: "Alt text",
					type: "string",
				}),
			],
		}),

		// ---------------- CATEGORIES ----------------
		defineField({
			name: "categories",
			title: "Categories",
			type: "array",
			of: [
				defineArrayMember({
					type: "reference",
					to: [{ type: "category" }],
				}),
			],
		}),

		// ---------------- TAGS ----------------
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
			},
		}),

		// ---------------- PUBLISHED DATE ----------------
		defineField({
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
		}),

		// ---------------- BODY ----------------
		defineField({
			name: "body",
			title: "Content",
			type: "blockContent",
			validation: (Rule) => Rule.required(),
		}),
	],

	preview: {
		select: {
			title: "title",
			media: "coverImage",
		},
		prepare({ title, media }) {
			return {
				title,
				media,
			};
		},
	},
});
