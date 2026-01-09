export interface ServiceDetail {
	slug: string;

	hero: {
		titleParts: {
			text: string;
			highlight?: boolean;
		}[];
		description: string[];
		primaryCta: string;
		secondaryCta: string;
		image?: string;
	};

	capabilities: {
		icon: string;
		title: string;
		description: string;
	}[];

	useCases: {
		tag: string;
		title: string;
		description: string;
		image: string;
		tools?: string[];
	}[];

	cta: {
		titleParts: {
			text: string;
			highlight?: boolean;
		}[];
		description: string;
		primary: string;
		secondary: string;
	};
}
