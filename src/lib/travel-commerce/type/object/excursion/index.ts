export type Excursion = {
	id: string;
	title: string;
	slug: string;
	summary: string;
	imageSrc: string;
	imageAlt: string;
	duration: string;
	pickup: string;
	priceFrom?: string;
	categories: string[];
	tags: string[];
	featured?: boolean;
};
