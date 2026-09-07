import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeGraphNodeCard extends ComputeIntersectAll<[SlotTheme]> {
	label?: string;
	caption?: string;
	badge?: string | number;
	status?: string;
}
