import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorDimensionable as IDimensionable } from '$stylist/layout/interface/behavior/dimensionable';
import type { TokenLineType } from '$stylist/architecture/type/enum/line-type';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { BehaviorPointClickable as IPointClickable } from '$stylist/interaction/interface/behavior/point-clickable';
import type { BehaviorTooltipable as ITooltipable } from '$stylist/interaction/interface/behavior/tooltipable';
import type { BehaviorLegendable as ILegendable } from '$stylist/chart/interface/behavior/legendable';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { BehaviorChartColorable as IChartColorable } from '$stylist/chart/interface/behavior/chart-colorable';
import type { BehaviorChartAxis as IChartAxis } from '$stylist/chart/interface/behavior/chart-axis';
import type { LineChartData } from '$stylist/chart/type/struct/line-chart-data';
import type { LineChartPoint } from '$stylist/chart/type/struct/line-chart';

/**
 * LineChart = label + frame + axis config + legend/tooltip toggles + line dataset.
 */
export interface LineChartRecipe
	extends StructIntersectAll<[
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

