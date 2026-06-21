import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { PieChartDataPoint } from '$stylist/chart/type/struct/pie-chart';

export interface RecipePieChart
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<SVGSVGElement>]> {
	label?: string;
	badge?: string | number;
	data?: readonly PieChartDataPoint[];
	width?: number;
	height?: number;
	colors?: readonly string[];
}
