import {
	PERFORMANCE_DASHBOARD_CONTAINER_BASE_CLASSES,
	PERFORMANCE_DASHBOARD_SIZE_CLASSES,
	PERFORMANCE_DASHBOARD_HEADER_CLASSES,
	PERFORMANCE_DASHBOARD_TIME_RANGE_BUTTON_BASE_CLASSES,
	PERFORMANCE_DASHBOARD_TIME_RANGE_BUTTON_ACTIVE_CLASSES,
	PERFORMANCE_DASHBOARD_TIME_RANGE_BUTTON_INACTIVE_CLASSES,
	PERFORMANCE_DASHBOARD_METRICS_GRID_CLASSES,
	PERFORMANCE_DASHBOARD_METRIC_CARD_BASE_CLASSES,
	PERFORMANCE_DASHBOARD_METRIC_HEADER_CLASSES,
	PERFORMANCE_DASHBOARD_METRIC_TITLE_CLASSES,
	PERFORMANCE_DASHBOARD_METRIC_VALUE_CLASSES,
	PERFORMANCE_DASHBOARD_METRIC_TREND_POSITIVE_CLASSES,
	PERFORMANCE_DASHBOARD_METRIC_TREND_NEGATIVE_CLASSES,
	PERFORMANCE_DASHBOARD_CHART_CONTAINER_CLASSES,
	PERFORMANCE_DASHBOARD_CHART_BAR_BASE_CLASSES,
	DEFAULT_PERFORMANCE_DASHBOARD_SIZE
} from '../classes/performance-dashboard';
import { cn } from '../utils/cn';

export interface PerformanceDashboardStyleManagerInterface {
	getContainerClass: (variant: string, size: string, className?: string) => string;
	getHeaderClass: (className?: string) => string;
	getTimeRangeButtonClass: () => string;
	getActiveTimeRangeButtonClass: () => string;
	getMetricsGridClass: (className?: string) => string;
	getMetricCardClass: (className?: string) => string;
	getMetricHeaderClass: () => string;
	getMetricTitleClass: () => string;
	getMetricValueClass: () => string;
	getTrendPositiveClass: () => string;
	getTrendNegativeClass: () => string;
	getChartContainerClass: () => string;
	getChartBarClass: () => string;
}

export class PerformanceDashboardStyleManager implements PerformanceDashboardStyleManagerInterface {
	static getContainerClass(variant: string, size: string, className?: string): string {
		const sizeClasses = PERFORMANCE_DASHBOARD_SIZE_CLASSES[size as keyof typeof PERFORMANCE_DASHBOARD_SIZE_CLASSES] || PERFORMANCE_DASHBOARD_SIZE_CLASSES[DEFAULT_PERFORMANCE_DASHBOARD_SIZE];
		return cn(PERFORMANCE_DASHBOARD_CONTAINER_BASE_CLASSES, sizeClasses, className);
	}

	static getHeaderClass(className?: string): string {
		return cn(PERFORMANCE_DASHBOARD_HEADER_CLASSES, className);
	}

	static getTimeRangeButtonClass(): string {
		return PERFORMANCE_DASHBOARD_TIME_RANGE_BUTTON_BASE_CLASSES;
	}

	static getActiveTimeRangeButtonClass(): string {
		return cn(PERFORMANCE_DASHBOARD_TIME_RANGE_BUTTON_BASE_CLASSES, PERFORMANCE_DASHBOARD_TIME_RANGE_BUTTON_ACTIVE_CLASSES);
	}

	static getMetricsGridClass(className?: string): string {
		return cn(PERFORMANCE_DASHBOARD_METRICS_GRID_CLASSES, className);
	}

	static getMetricCardClass(className?: string): string {
		return cn(PERFORMANCE_DASHBOARD_METRIC_CARD_BASE_CLASSES, className);
	}

	static getMetricHeaderClass(): string {
		return PERFORMANCE_DASHBOARD_METRIC_HEADER_CLASSES;
	}

	static getMetricTitleClass(): string {
		return PERFORMANCE_DASHBOARD_METRIC_TITLE_CLASSES;
	}

	static getMetricValueClass(): string {
		return PERFORMANCE_DASHBOARD_METRIC_VALUE_CLASSES;
	}

	static getTrendPositiveClass(): string {
		return PERFORMANCE_DASHBOARD_METRIC_TREND_POSITIVE_CLASSES;
	}

	static getTrendNegativeClass(): string {
		return PERFORMANCE_DASHBOARD_METRIC_TREND_NEGATIVE_CLASSES;
	}

	static getChartContainerClass(): string {
		return PERFORMANCE_DASHBOARD_CHART_CONTAINER_CLASSES;
	}

	static getChartBarClass(): string {
		return PERFORMANCE_DASHBOARD_CHART_BAR_BASE_CLASSES;
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