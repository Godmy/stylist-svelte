import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface RecipeMessageStatusProps extends StructIntersectAll<[]> {
	status?: 'sent' | 'delivered' | 'read';
	size?: 'sm' | 'md' | 'lg';
	class?: string;
}
