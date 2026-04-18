import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface PromoBannerProps extends StructIntersectAll<[]> {
	title?: string;
	description?: string;
	cta?: string;
	link?: string;
	image?: string;
	variant?: string;
	onCtaClick?: () => void;
	class?: string;
}
