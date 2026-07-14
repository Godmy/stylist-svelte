import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorDimensionable as IDimensionable } from '$stylist/layout/interface/behavior/dimensionable';
import type { BehaviorBarClickable as IBarClickable } from '$stylist/chart/interface/behavior/bar-clickable';
import type { BehaviorTooltipable as ITooltipable } from '$stylist/interaction/interface/behavior/tooltipable';
import type { BehaviorLegendable as ILegendable } from '$stylist/chart/interface/behavior/legendable';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { BehaviorChartColorable as IChartColorable } from '$stylist/chart/interface/behavior/chart-colorable';
import type { BehaviorChartAxis as IChartAxis } from '$stylist/chart/interface/behavior/chart-axis';
import type { IChartDataPoint } from '$stylist/chart/type/struct/bar-chart';

export interface RecipeBarChart
	extends ComputeIntersectAll<
		[
			SlotTheme,
			IDimensionable,
			ILabelSlot,
			IChartAxis,
			ILegendable,
			ITooltipable,
			IBarClickable<IChartDataPoint>,
			IChartColorable,
			HTMLAttributes<HTMLDivElement>
		]
	> {
	data: IChartDataPoint[];
	title?: string;
	chartClass?: string;
	showAxis?: boolean;
	showGrid?: boolean;
	showZAxis?: boolean;
	showAxisArrows?: boolean;
	barGap?: number;
	barWidth?: number;
}
