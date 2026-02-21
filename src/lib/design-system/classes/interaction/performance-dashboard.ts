/**
 * Performance Dashboard CSS classes
 */

export const PERFORMANCE_DASHBOARD_CONTAINER_BASE_CLASSES = 'bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-default] overflow-hidden';

export const PERFORMANCE_DASHBOARD_SIZE_CLASSES = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg'
} as const;

export const PERFORMANCE_DASHBOARD_HEADER_CLASSES = 'flex justify-between items-center p-4 border-b border-[--color-border-default]';
export const PERFORMANCE_DASHBOARD_TITLE_CLASSES = 'text-lg font-semibold text-[--color-text-primary]';
export const PERFORMANCE_DASHBOARD_TIME_RANGE_CLASSES = 'flex gap-2';

export const PERFORMANCE_DASHBOARD_TIME_RANGE_BUTTON_BASE_CLASSES = 'px-3 py-1.5 text-sm rounded-md border border-[--color-border-default] transition-colors';
export const PERFORMANCE_DASHBOARD_TIME_RANGE_BUTTON_ACTIVE_CLASSES = 'bg-[--color-primary-500] text-[--color-text-inverse] border-[--color-primary-500]';
export const PERFORMANCE_DASHBOARD_TIME_RANGE_BUTTON_INACTIVE_CLASSES = 'bg-[--color-background-primary] text-[--color-text-primary] hover:bg-[--color-surface-hover]';

export const PERFORMANCE_DASHBOARD_METRICS_GRID_CLASSES = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4';
export const PERFORMANCE_DASHBOARD_METRIC_CARD_BASE_CLASSES = 'bg-[--color-surface] rounded-lg border border-[--color-border-default] p-4';
export const PERFORMANCE_DASHBOARD_METRIC_HEADER_CLASSES = 'flex justify-between items-center mb-2';
export const PERFORMANCE_DASHBOARD_METRIC_TITLE_CLASSES = 'text-sm font-medium text-[--color-text-secondary]';
export const PERFORMANCE_DASHBOARD_METRIC_VALUE_CLASSES = 'text-2xl font-bold text-[--color-text-primary]';
export const PERFORMANCE_DASHBOARD_METRIC_TREND_POSITIVE_CLASSES = 'text-green-600';
export const PERFORMANCE_DASHBOARD_METRIC_TREND_NEGATIVE_CLASSES = 'text-red-600';

export const PERFORMANCE_DASHBOARD_CHART_CONTAINER_CLASSES = 'p-4';
export const PERFORMANCE_DASHBOARD_CHART_BAR_BASE_CLASSES = 'bg-[--color-primary-500] rounded';

export const DEFAULT_PERFORMANCE_DASHBOARD_SIZE: keyof typeof PERFORMANCE_DASHBOARD_SIZE_CLASSES = 'md';
