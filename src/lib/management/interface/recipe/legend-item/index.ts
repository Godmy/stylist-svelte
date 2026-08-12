import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeLegendItem extends ComputeIntersectAll<[]> {
	label: string;
	type: string;
	count?: number;
	variant?: string;
	active?: boolean;
	onClick?: () => void;
}
