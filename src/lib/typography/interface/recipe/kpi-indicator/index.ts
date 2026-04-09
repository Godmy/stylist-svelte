import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TokenKPI } from '$stylist/typography/type/enum/kpi';
import type { IMetricValue } from '$stylist/information/interface/proto/metric-value';
import type { ITrendable } from '$stylist/information/interface/proto/trendable';

/**
 * KPIIndicator = shared label + metric + trend + size with analytics KPI status.
 */
export interface KPIIndicatorRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IMetricValue,
		ITrendable,
		ISizable,
		ThemeAttributes<HTMLDivElement>
	]> {
	status?: TokenKPI;
	titleClass?: string;
	valueClass?: string;
}
