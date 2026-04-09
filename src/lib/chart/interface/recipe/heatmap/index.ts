import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IDimensionable } from '$stylist/layout/interface/proto/dimensionable';
import type { ICellClickable } from '$stylist/interaction/interface/proto/cell-clickable';
import type { ITooltipable } from '$stylist/interaction/interface/proto/tooltipable';
import type { ILegendable } from '$stylist/chart/interface/proto/legendable';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { IChartColorable } from '$stylist/chart/interface/proto/chart-colorable';
import type { IChartAxis } from '$stylist/chart/interface/proto/chart-axis';
import type { IHeatmapCell } from '$stylist/chart/type/struct/heatmap/cell';

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
