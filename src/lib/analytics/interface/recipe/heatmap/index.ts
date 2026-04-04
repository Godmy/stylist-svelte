import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IDimensionable } from '$stylist/architecture/interface/proto/dimensionable';
import type { ICellClickable } from '$stylist/interaction/interface/proto/cell-clickable';
import type { ITooltipable } from '$stylist/interaction/interface/proto/tooltipable';
import type { ILegendable } from '$stylist/information/interface/proto/legendable';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { IChartColorable } from '$stylist/analytics/interface/proto/chart-colorable';
import type { IChartAxis } from '$stylist/analytics/interface/proto/chart-axis';
import type { IHeatmapCell } from '$stylist/analytics/type/struct/heatmap/cell';

/**
 * Heatmap = label + frame + axis config + legend/tooltip toggles + heatmap cells.
 */
export interface HeatmapRecipe
	extends RecordArchitectureMerge<[
		IDimensionable,
		ILabelSlot,
		IChartAxis,
		ILegendable,
		ITooltipable,
		ICellClickable<IHeatmapCell>,
		IChartColorable,
		ThemeAttributes<HTMLDivElement>
	]> {
	data: IHeatmapCell[];
	title?: string;
	chartClass?: string;
	showAxis?: boolean;
	showGrid?: boolean;
	showZAxis?: boolean;
	showAxisArrows?: boolean;
	cellPadding?: number;
}
