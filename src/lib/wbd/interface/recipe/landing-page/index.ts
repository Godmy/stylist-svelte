export interface LandingPageContent {
	metaTitle: string;
	metaDescription: string;
	nav: { cases: string; method: string; about: string; signIn: string };
	hero: { eyebrow: string; title: string; lead: string; create: string; cases: string };
	metrics: [string, string][];
	definition: {
		eyebrow: string;
		title: string;
		paragraphs: string[];
		comparisonTitle: string;
		comparisonColumns: [string, string, string];
		comparisonCriteria: string[];
		comparisonRows: [string, string, string][];
	};
	intro: { eyebrow: string; title: string; body: string };
	casesHeading: { eyebrow: string; title: string };
	cases: {
		kicker: string;
		title: string;
		body: string;
		result: string;
		image: string;
		alt: string;
	}[];
	workflow: { eyebrow: string; title: string; steps: string[] };
	result: { eyebrow: string; title: string; body: string; cta: string };
	labels: {
		nav: string;
		metrics: string;
		definition: string;
		cases: string;
		workflow: string;
		result: string;
	};
}
