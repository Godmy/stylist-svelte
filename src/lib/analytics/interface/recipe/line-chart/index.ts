import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IDimensionable } from '$stylist/architecture/interface/proto/dimensionable';
import type { TokenLineType } from '$stylist/architecture/type/enum/line-type';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { IPointClickable } from '$stylist/interaction/interface/proto/point-clickable';
import type { ITooltipable } from '$stylist/interaction/interface/proto/tooltipable';
import type { ILegendable } from '$stylist/information/interface/proto/legendable';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { IChartColorable } from '$stylist/analytics/interface/proto/chart-colorable';
import type { IChartAxis } from '$stylist/analytics/interface/proto/chart-axis';
import type { LineChartData, LineChartPoint } from '$stylist/analytics/type/struct/line-chart';

/**
 * LineChart = label + frame + axis config + legend/tooltip toggles + line dataset.
 */
export interface LineChartRecipe
	extends RecordArchitectureMerge<[
		IDimensionable,
		ILabelSlot,
		IChartAxis,
		ILegendable,
		ITooltipable,
		IPointClickable<LineChartPoint, LineChartData>,
		IChartColorable,
		ThemeAttributes<HTMLDivElement>
	]> {
	data: LineChartData[];
	title?: string;
	chartClass?: string;
	showAxis?: boolean;
	showGrid?: boolean;
	showZAxis?: boolean;
	showAxisArrows?: boolean;
	smooth?: boolean;
	strokeWidth?: number;
	variant?: TokenLineType;
	size?: TokenSize;
}
