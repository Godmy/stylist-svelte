import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { PerformanceMonitorStatus } from '$stylist/management/type/alias/performance-monitor-status';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';

export interface RecipePerformanceMonitor
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, IMetricValue, HTMLAttributes<HTMLDivElement>]
	> {
	status?: PerformanceMonitorStatus;
}

