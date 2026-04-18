import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorDimensionable as IDimensionable } from '$stylist/layout/interface/behavior/dimensionable';
import type { BehaviorCellClickable as ICellClickable } from '$stylist/interaction/interface/behavior/cell-clickable';
import type { BehaviorTooltipable as ITooltipable } from '$stylist/interaction/interface/behavior/tooltipable';
import type { BehaviorLegendable as ILegendable } from '$stylist/chart/interface/behavior/legendable';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { BehaviorChartColorable as IChartColorable } from '$stylist/chart/interface/behavior/chart-colorable';
import type { BehaviorChartAxis as IChartAxis } from '$stylist/chart/interface/behavior/chart-axis';
import type { IHeatmapCell } from '$stylist/chart/type/struct/heatmap/cell';

/**
 * Heatmap = label + frame + axis config + legend/tooltip toggles + heatmap cells.
 */
export interface HeatmapRecipe
	extends StructIntersectAll<[
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

