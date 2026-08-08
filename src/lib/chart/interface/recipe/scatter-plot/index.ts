import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorDimensionable as IDimensionable } from '$stylist/layout/interface/behavior/dimensionable';
import type { BehaviorPointClickable as IPointClickable } from '$stylist/chart/interface/behavior/point-clickable';
import type { BehaviorLegendable as ILegendable } from '$stylist/chart/interface/behavior/legendable';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { BehaviorChartColorable as IChartColorable } from '$stylist/chart/interface/behavior/chart-colorable';
import type { BehaviorChartAxis as IChartAxis } from '$stylist/chart/interface/behavior/chart-axis';
import type { ScatterPlotDataPoint } from '$stylist/chart/type/struct/scatter-plot-point';

export interface RecipeScatterPlot
	extends ComputeIntersectAll<
		[
			SlotTheme,
			IDimensionable,
			ILabelSlot,
			IChartAxis,
			ILegendable,
			IPointClickable<ScatterPlotDataPoint>,
			IChartColorable,
			HTMLAttributes<HTMLDivElement>
		]
	> {
	data: ScatterPlotDataPoint[];
	title?: string;
	showAxis?: boolean;
	showGrid?: boolean;
	showZAxis?: boolean;
	showAxisArrows?: boolean;
	pointSize?: number;
	showLabels?: boolean;
}
