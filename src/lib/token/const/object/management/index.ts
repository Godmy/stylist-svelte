import type { Token } from '$stylist/token/type/struct/token';
import { TOKEN_KPI } from '$stylist/management/const/array/kpi';
import { TOKEN_NOTIFICATION_CHANNEL } from '$stylist/management/const/array/notification-channel';
import { TOKEN_PERFORMANCE_BARS } from '$stylist/management/const/array/performance-bars';
import { PERFORMANCE_MONITOR_STATUS } from '$stylist/management/const/array/performance-monitor-status';
import { TOKEN_PERFORMANCE_RANGE } from '$stylist/management/const/array/performance-range';
import { TOKEN_TREND } from '$stylist/management/const/array/trend';

export const TOKEN_MANAGEMENT_SETTING = [
	{ key: 'kpi', label: 'Kpi', domain: 'management', controlKind: 'radio', values: TOKEN_KPI },
	{ key: 'notification-channel', label: 'Notification Channel', domain: 'management', controlKind: 'radio', values: TOKEN_NOTIFICATION_CHANNEL },
	{ key: 'performance-bars', label: 'Performance Bars', domain: 'management', controlKind: 'radio', values: TOKEN_PERFORMANCE_BARS },
	{ key: 'performance-monitor-status', label: 'Performance Monitor Status', domain: 'management', controlKind: 'radio', values: PERFORMANCE_MONITOR_STATUS },
	{ key: 'performance-range', label: 'Performance Range', domain: 'management', controlKind: 'radio', values: TOKEN_PERFORMANCE_RANGE },
	{ key: 'trend', label: 'Trend', domain: 'management', controlKind: 'radio', values: TOKEN_TREND }
] satisfies readonly Token[];