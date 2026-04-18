import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TierContent } from '$stylist/architecture/type/enum/tier';

export interface ProductCardStateProps extends StructIntersectAll<[]> {	variant?: TierContent;
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
}
