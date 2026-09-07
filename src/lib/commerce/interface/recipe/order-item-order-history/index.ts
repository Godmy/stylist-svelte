import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeOrderItemOrderHistory extends ComputeIntersectAll<[]> {
	id: string;
	name: string;
	quantity: number;
	price: number;
	thumbnail?: string;
}
