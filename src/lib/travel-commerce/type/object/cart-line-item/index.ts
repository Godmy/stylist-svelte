export type CartLineItem = {
	id: string;
	title: string;
	subtitle?: string;
	date?: string;
	pickup?: string;
	travelers?: string;
	total: string;
	addons?: string[];
	imageSrc?: string;
	imageAlt?: string;
};
