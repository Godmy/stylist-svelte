import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeOrderItemOrderConfirmation extends ComputeIntersectAll<[]> {
	id: string;
	name: string;
	price: number;
	quantity: number;
	variant?: string;
	thumbnail?: string;
}
