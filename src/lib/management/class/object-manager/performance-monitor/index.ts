import type { PerformanceMonitorStatus } from '$stylist/management/type/struct/performance-monitor';
import { PERFORMANCE_MONITOR_STATUS_COLOR } from '$stylist/management/const/map/performance-monitor-status-color';

export class ObjectManagerPerformanceMonitor {
	static resolvePercentage(value: number, max: number): number {
		if (max === 0) {
			return 0;
		}

		return Math.round((value / max) * 100);
	}

	static resolveStatusBarClass(status: PerformanceMonitorStatus): string {
		return PERFORMANCE_MONITOR_STATUS_COLOR[status];
	}

	static resolveProgressWidth(percentage: number): string {
		return `${Math.min(100, Math.max(0, percentage))}%`;
	}
}
