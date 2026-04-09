import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { PerformanceMonitorStatus } from '$stylist/management/type/struct/performance-monitor';
import type { IMetricValue } from '$stylist/information/interface/proto/metric-value';

/**
 * PerformanceMonitor = shared label + metric value with analytics status.
 */
export interface PerformanceMonitorRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IMetricValue,
		ThemeAttributes<HTMLDivElement>
	]> {
	status?: PerformanceMonitorStatus;
}
