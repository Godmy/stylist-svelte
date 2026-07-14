import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeScience extends ComputeIntersectAll<[]> {
	id: string;
	type: 'button' | 'select' | 'input' | 'separator';
	label?: string;
	tooltip?: string;
	icon?: string;
	active?: boolean;
	disabled?: boolean;
	value?: unknown;
	options?: string[];
	onclick?: () => void;
}
