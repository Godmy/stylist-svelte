import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorDimensionable as IDimensionable } from '$stylist/layout/interface/behavior/dimensionable';
import type { BehaviorPointClickable as IPointClickable } from '$stylist/interaction/interface/behavior/point-clickable';
import type { BehaviorLegendable as ILegendable } from '$stylist/chart/interface/behavior/legendable';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { BehaviorChartColorable as IChartColorable } from '$stylist/chart/interface/behavior/chart-colorable';
import type { BehaviorChartAxis as IChartAxis } from '$stylist/chart/interface/behavior/chart-axis';
import type { ScatterPlotDataPoint } from '$stylist/chart/type/struct/scatter-plot-point';

/**
 * ScatterPlot = label + frame + axis config + legend toggle + scatter dataset.
 */
export interface ScatterPlotRecipe
	extends StructIntersectAll<[
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

