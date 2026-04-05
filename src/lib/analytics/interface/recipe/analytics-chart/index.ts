import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IDimensionable } from '$stylist/layout/interface/proto/dimensionable';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { ILegendable } from '$stylist/information/interface/proto/legendable';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type {
	AnalyticsChartDataPoint,
	TokenAnalyticsChartType
} from '$stylist/analytics/type/struct/analytics-chart';

/**
 * AnalyticsChart = label + caption + frame + legend toggle + analytics dataset.
 */
export interface AnalyticsChartRecipe
	extends RecordArchitectureMerge<[
		IDimensionable,
		ILabelSlot,
		ICaptionSlot,
		ILegendable,
		ThemeAttributes<HTMLDivElement>
	]> {
	data: AnalyticsChartDataPoint[];
	type?: TokenAnalyticsChartType;
	title?: string;
	showTrend?: boolean;
	trendValue?: number;
	chartClass?: string;
	legendClass?: string;
}
