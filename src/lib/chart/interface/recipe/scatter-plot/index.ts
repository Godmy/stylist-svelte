import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IDimensionable } from '$stylist/layout/interface/proto/dimensionable';
import type { IPointClickable } from '$stylist/interaction/interface/proto/point-clickable';
import type { ILegendable } from '$stylist/information/interface/proto/legendable';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { IChartColorable } from '$stylist/chart/interface/proto/chart-colorable';
import type { IChartAxis } from '$stylist/chart/interface/proto/chart-axis';
import type { ScatterPlotDataPoint } from '$stylist/chart/type/struct/scatter-plot-point';

/**
 * ScatterPlot = label + frame + axis config + legend toggle + scatter dataset.
 */
export interface ScatterPlotRecipe
	extends RecordArchitectureMerge<[
		IDimensionable,
		ILabelSlot,
		IChartAxis,
		ILegendable,
		IPointClickable<ScatterPlotDataPoint>,
		IChartColorable,
		ThemeAttributes<HTMLDivElement>
	]> {
	data: ScatterPlotDataPoint[];
	title?: string;
	showAxis?: boolean;
	showGrid?: boolean;
	showZAxis?: boolean;
	showAxisArrows?: boolean;
	pointSize?: number;
	showLabels?: boolean;
}
