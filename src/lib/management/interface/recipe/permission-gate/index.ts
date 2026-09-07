import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';
export interface RecipePermissionGate extends ComputeIntersectAll<[]> {
	hasPermission?: boolean;
	fallback?: Snippet | null;
	children: Snippet;
}
