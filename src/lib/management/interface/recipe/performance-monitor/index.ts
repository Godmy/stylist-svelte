import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { PerformanceMonitorStatus } from '$stylist/management/type/alias/performance-monitor-status';
import type { BehaviorMetricValue } from '$stylist/chart/interface/behavior/metric-value';
export interface RecipePerformanceMonitor
	extends ComputeIntersectAll<[SlotTheme, SlotText, BehaviorMetricValue]> {
	status?: PerformanceMonitorStatus;
}

