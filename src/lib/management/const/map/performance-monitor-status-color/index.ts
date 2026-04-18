import type { PerformanceMonitorStatus } from '$stylist/management/type/struct/performance-monitor';

export const PERFORMANCE_MONITOR_STATUS_COLOR = {
	normal: 'bg-[var(--color-success-500)]',
	warning: 'bg-yellow-500',
	critical: 'bg-[var(--color-danger-500)]'
} as const satisfies Record<PerformanceMonitorStatus, string>;

