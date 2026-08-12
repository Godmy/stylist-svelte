import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorDimensionable } from '$stylist/layout/interface/behavior/dimensionable';
import type { BehaviorTooltipable } from '$stylist/chart/interface/behavior/tooltipable';
import type { BehaviorLegendable } from '$stylist/chart/interface/behavior/legendable';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { BehaviorChartColorable } from '$stylist/chart/interface/behavior/chart-colorable';
import type { BehaviorChartAxis } from '$stylist/chart/interface/behavior/chart-axis';
import type { IHeatmapCell } from '$stylist/chart/type/object/heatmap/cell';
export interface RecipeHeatmap
	extends ComputeIntersectAll<
		[SlotTheme, BehaviorDimensionable, SlotText, BehaviorChartAxis, BehaviorLegendable, BehaviorTooltipable, BehaviorChartColorable, HTMLAttributes<HTMLDivElement>]
	> {
	onCellClick?: (item: IHeatmapCell) => void;

	data: IHeatmapCell[];
	title?: string;
	chartClass?: string;
	showAxis?: boolean;
	showGrid?: boolean;
	showZAxis?: boolean;
	showAxisArrows?: boolean;
	cellPadding?: number;
}
