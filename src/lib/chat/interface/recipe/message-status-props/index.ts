import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeMessageStatusProps extends ComputeIntersectAll<[]> {
	status?: 'sent' | 'delivered' | 'read';
	size?: 'sm' | 'md' | 'lg';
	class?: string;
}
