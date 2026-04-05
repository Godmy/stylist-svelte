import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { ITimeRangeFilter } from '$stylist/calendar/interface/proto/time-range-filter';
import type { Metric } from '$stylist/analytics/type/struct/performance-dashboard';

/**
 * PerformanceDashboard = shared information slots + time range filter + size.
 */
export interface PerformanceDashboardRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		ITimeRangeFilter,
		ISizable,
		ThemeAttributes<HTMLDivElement>
	]> {
	metrics: Metric[];
	headerClass?: string;
	metricsClass?: string;
	metricCardClass?: string;
	variant?: 'default' | 'compact' | 'minimal';
}
