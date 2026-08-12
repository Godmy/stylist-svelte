import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeShippingRegion extends ComputeIntersectAll<[]> {
	id: string;
	name: string;
	countries: string[];
	additionalFee?: number;
	restrictions?: string[];
}
