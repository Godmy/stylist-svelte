import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { BehaviorTimeRangeFilter as ITimeRangeFilter } from '$stylist/calendar/interface/behavior/time-range-filter';
import type { Metric } from '$stylist/management/type/struct/performance-dashboard';

/**
 * PerformanceDashboard = shared information slots + time range filter + size.
 */
export interface PerformanceDashboardRecipe
	extends StructIntersectAll<[
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

