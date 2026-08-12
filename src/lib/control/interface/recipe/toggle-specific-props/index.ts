import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeToggleSpecificProps extends ComputeIntersectAll<[]> {
	type?: 'toggle' | 'checkbox' | 'radio' | 'switch';

	multiple?: boolean;

	groupName?: string;

	description?: string;
}
