import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ChartSeries } from '$stylist/chart/interface/slot/chart-series';
export interface RecipeChart
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<SVGSVGElement>]> {
	label?: string;
	caption?: string;
	badge?: string | number;
	series?: ChartSeries[];
	width?: number;
	height?: number;
	showLegend?: boolean;
	showGrid?: boolean;
	showZAxis?: boolean;
	xScale?: ([number, number]);
	yScale?: ([number, number]);
	xTickCount?: number;
	yTickCount?: number;
	zTickCount?: number;
	showAxisArrows?: boolean;
	xAxisLabel?: string;
	yAxisLabel?: string;
	zAxisLabel?: string;
	title?: string;
}
