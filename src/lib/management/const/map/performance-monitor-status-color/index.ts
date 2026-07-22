import type { PerformanceMonitorStatus } from '$stylist/management/type/alias/performance-monitor-status';

export const PERFORMANCE_MONITOR_STATUS_COLOR = {
	normal: 'performance-monitor__bar--normal',
	warning: 'performance-monitor__bar--warning',
	critical: 'performance-monitor__bar--critical'
} as const satisfies Record<PerformanceMonitorStatus, string>;

