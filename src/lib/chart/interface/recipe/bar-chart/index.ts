import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorDimensionable as IDimensionable } from '$stylist/layout/interface/behavior/dimensionable';
import type { BehaviorBarClickable as IBarClickable } from '$stylist/interaction/interface/behavior/bar-clickable';
import type { BehaviorTooltipable as ITooltipable } from '$stylist/interaction/interface/behavior/tooltipable';
import type { BehaviorLegendable as ILegendable } from '$stylist/chart/interface/behavior/legendable';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { BehaviorChartColorable as IChartColorable } from '$stylist/chart/interface/behavior/chart-colorable';
import type { BehaviorChartAxis as IChartAxis } from '$stylist/chart/interface/behavior/chart-axis';
import type { IChartDataPoint } from '$stylist/chart/type/struct/bar-chart';

/**
 * BarChart = label + frame + axis config + legend/tooltip toggles + bar dataset.
 */
export interface BarChartRecipe
	extends StructIntersectAll<[
		IDimensionable,
		ILabelSlot,
		IChartAxis,
		ILegendable,
		ITooltipable,
		IBarClickable<IChartDataPoint>,
		IChartColorable,
		ThemeAttributes<HTMLDivElement>
	]> {
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

