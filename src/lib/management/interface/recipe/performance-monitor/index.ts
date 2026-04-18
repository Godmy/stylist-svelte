import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { PerformanceMonitorStatus } from '$stylist/management/type/struct/performance-monitor';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';

/**
 * PerformanceMonitor = shared label + metric value with analytics status.
 */
export interface PerformanceMonitorRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		IMetricValue,
		ThemeAttributes<HTMLDivElement>
	]> {
	status?: PerformanceMonitorStatus;
}

