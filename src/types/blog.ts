export interface Blog {
	_id?: string;
	title: string;
	slug: string;
	excerpt: string;

	content: any[];

	coverImage?: string;

	categories: string[];
	tags?: string[];

	publishedAt: string;

	featured?: boolean;

	seo?: {
		metaTitle?: string;
		metaDescription?: string;
	};
}
