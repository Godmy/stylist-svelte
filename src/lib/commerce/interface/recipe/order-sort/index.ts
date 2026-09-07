import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeOrderSort extends ComputeIntersectAll<[]> {
	field: 'date' | 'total' | 'status';
	direction: 'asc' | 'desc';
}
