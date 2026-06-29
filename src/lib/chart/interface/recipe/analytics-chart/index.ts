import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorDimensionable as IDimensionable } from '$stylist/layout/interface/behavior/dimensionable';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { BehaviorLegendable as ILegendable } from '$stylist/chart/interface/behavior/legendable';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { TokenCanvasChartType } from '$stylist/chart/type/alias/canvas-chart-type';
import type { AnalyticsChartDataPoint } from '$stylist/chart/type/struct/analytics-chart-data-point';

export interface RecipeAnalyticsChart
	extends ComputeIntersectAll<
		[
			SlotTheme,
			IDimensionable,
			ILabelSlot,
			ICaptionSlot,
			ILegendable,
			HTMLAttributes<HTMLDivElement>
		]
	> {
	data: AnalyticsChartDataPoint[];
	type?: TokenCanvasChartType;
	title?: string;
	showTrend?: boolean;
	trendValue?: number;
	chartClass?: string;
	legendClass?: string;
}

