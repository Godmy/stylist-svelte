import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeChartBackground
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<SVGRectElement>]> {
	width?: number;
	height?: number;
	fill?: string;
	stroke?: string;
}
