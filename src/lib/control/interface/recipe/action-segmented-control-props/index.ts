import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeActionSegmentedControlProps extends ComputeIntersectAll<[]> {
	items: string[];
	selectedIndex?: number;
	onValueInput?: (value: number) => void;
	onValueChange?: (value: number) => void;
	onChange?: (value: number) => void;
	class?: string;
}
