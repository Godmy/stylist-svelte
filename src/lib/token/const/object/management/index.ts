import type { Token } from '$stylist/token/type/object/token';
import { TOKEN_KPI } from '$stylist/management/const/array/kpi';
import { TOKEN_PERFORMANCE_BARS } from '$stylist/management/const/array/performance-bars';
import { PERFORMANCE_MONITOR_STATUS } from '$stylist/management/const/array/performance-monitor-status';
import { TOKEN_TREND } from '$stylist/management/const/array/trend';

export const TOKEN_MANAGEMENT_SETTING = [
	{ key: 'kpi', label: 'Kpi', domain: 'management', controlKind: 'radio', values: TOKEN_KPI },
	{
		key: 'performance-bars',
		label: 'Performance Bars',
		domain: 'management',
		controlKind: 'radio',
		values: TOKEN_PERFORMANCE_BARS
	},
	{
		key: 'performance-monitor-status',
		label: 'Performance Monitor Status',
		domain: 'management',
		controlKind: 'radio',
		values: PERFORMANCE_MONITOR_STATUS
	},
	{ key: 'trend', label: 'Trend', domain: 'management', controlKind: 'radio', values: TOKEN_TREND }
] satisfies readonly Token[];
