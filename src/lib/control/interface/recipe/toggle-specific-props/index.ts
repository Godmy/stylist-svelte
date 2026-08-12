import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface ToggleSpecificProps extends ComputeIntersectAll<[]> {
	type?: 'toggle' | 'checkbox' | 'radio' | 'switch';

	multiple?: boolean;

	groupName?: string;

	description?: string;
}
