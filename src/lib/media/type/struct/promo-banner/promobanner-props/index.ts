export type PromoBannerProps = {
	title?: string;
	description?: string;
	cta?: string;
	link?: string;
	image?: string;
	variant?: PromoBannerVariant;
	onCtaClick?: () => void;
	class?: string;
};
