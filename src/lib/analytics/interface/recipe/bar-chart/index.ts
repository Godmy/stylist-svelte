import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IDimensionable } from '$stylist/architecture/interface/proto/dimensionable';
import type { IBarClickable } from '$stylist/interaction/interface/proto/bar-clickable';
import type { ITooltipable } from '$stylist/interaction/interface/proto/tooltipable';
import type { ILegendable } from '$stylist/information/interface/proto/legendable';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { IChartColorable } from '$stylist/analytics/interface/proto/chart-colorable';
import type { IChartAxis } from '$stylist/analytics/interface/proto/chart-axis';
import type { IChartDataPoint } from '$stylist/analytics/type/struct/bar-chart';

/**
 * BarChart = label + frame + axis config + legend/tooltip toggles + bar dataset.
 */
export interface BarChartRecipe
	extends RecordArchitectureMerge<[
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
