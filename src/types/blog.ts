export interface BlogAuthor {
	name: string;
	role?: string;
	bio?: string;
	image?: string;
	profileUrl?: string;
	twitterUrl?: string;
}

export interface Blog {
	_id?: string;
	title: string;
	slug: string;
	excerpt: string;

	content: any[];

	coverImage?: string;

	author?: BlogAuthor;

	categories: string[];
	tags?: string[];

	publishedAt: string;

	featured?: boolean;

	seo?: {
		metaTitle?: string;
		metaDescription?: string;
	};
}
