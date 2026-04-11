import type { TierContent } from '$stylist/architecture/type/enum/tier';

export type ProductCardStateProps = {
	variant?: TierContent;
	title?: string;
	price?: number;
	currency?: string;
	image?: string;
	rating?: number;
	reviewCount?: number;
	badge?: string;
	description?: string;
	actions?: any;
	class?: string;
};
