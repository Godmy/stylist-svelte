import { cn } from '../../utils/cn/index';

const PERFORMANCE_DASHBOARD_SIZE_CLASSES = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg'
} as const;

const PERFORMANCE_DASHBOARD_TIME_RANGE_BUTTON_BASE_CLASSES =
	'px-3 py-1.5 text-sm rounded-md border border-[--color-border-primary] transition-colors';

const DEFAULT_PERFORMANCE_DASHBOARD_SIZE: keyof typeof PERFORMANCE_DASHBOARD_SIZE_CLASSES = 'md';

export class PerformanceDashboardStyleManager {
	static getContainerClass(variant: string, size: string, className?: string): string {
		const sizeClasses = PERFORMANCE_DASHBOARD_SIZE_CLASSES[size as keyof typeof PERFORMANCE_DASHBOARD_SIZE_CLASSES] || PERFORMANCE_DASHBOARD_SIZE_CLASSES[DEFAULT_PERFORMANCE_DASHBOARD_SIZE];
		return cn('bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-primary] overflow-hidden', sizeClasses, className);
	}

	static getHeaderClass(className?: string): string {
		return cn('flex justify-between items-center p-4 border-b border-[--color-border-primary]', className);
	}

	static getTimeRangeButtonClass(): string {
		return PERFORMANCE_DASHBOARD_TIME_RANGE_BUTTON_BASE_CLASSES;
	}

	static getActiveTimeRangeButtonClass(): string {
		return cn(PERFORMANCE_DASHBOARD_TIME_RANGE_BUTTON_BASE_CLASSES, 'bg-[--color-primary-500] text-[--color-text-inverse] border-[--color-primary-500]');
	}

	static getMetricsGridClass(className?: string): string {
		return cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4', className);
	}

	static getMetricCardClass(className?: string): string {
		return cn('bg-[--color-background-primary] rounded-lg border border-[--color-border-primary] p-4', className);
	}

	static getMetricHeaderClass(): string {
		return 'flex justify-between items-center mb-2';
	}

	static getMetricTitleClass(): string {
		return 'text-sm font-medium text-[--color-text-secondary]';
	}

	static getMetricValueClass(): string {
		return 'text-2xl font-bold text-[--color-text-primary]';
	}

	static getTrendPositiveClass(): string {
		return 'text-[--color-success-600]';
	}

	static getTrendNegativeClass(): string {
		return 'text-[--color-danger-600]';
	}

	static getChartContainerClass(): string {
		return 'p-4';
	}

	static getChartBarClass(): string {
		return 'bg-[--color-primary-500] rounded';
	}

	// Instance methods for interface implementation
	getContainerClass(variant: string, size: string, className?: string): string {
		return PerformanceDashboardStyleManager.getContainerClass(variant, size, className);
	}

	getHeaderClass(className?: string): string {
		return PerformanceDashboardStyleManager.getHeaderClass(className);
	}

	getTimeRangeButtonClass(): string {
		return PerformanceDashboardStyleManager.getTimeRangeButtonClass();
	}

	getActiveTimeRangeButtonClass(): string {
		return PerformanceDashboardStyleManager.getActiveTimeRangeButtonClass();
	}

	getMetricsGridClass(className?: string): string {
		return PerformanceDashboardStyleManager.getMetricsGridClass(className);
	}

	getMetricCardClass(className?: string): string {
		return PerformanceDashboardStyleManager.getMetricCardClass(className);
	}

	getMetricHeaderClass(): string {
		return PerformanceDashboardStyleManager.getMetricHeaderClass();
	}

	getMetricTitleClass(): string {
		return PerformanceDashboardStyleManager.getMetricTitleClass();
	}

	getMetricValueClass(): string {
		return PerformanceDashboardStyleManager.getMetricValueClass();
	}

	getTrendPositiveClass(): string {
		return PerformanceDashboardStyleManager.getTrendPositiveClass();
	}

	getTrendNegativeClass(): string {
		return PerformanceDashboardStyleManager.getTrendNegativeClass();
	}

	getChartContainerClass(): string {
		return PerformanceDashboardStyleManager.getChartContainerClass();
	}

	getChartBarClass(): string {
		return PerformanceDashboardStyleManager.getChartBarClass();
	}
}



