import type { Token } from '$stylist/token/type/struct/token';
import { TRAFFIC_ANALYTICS_TIME_RANGE } from '$stylist/marketing/const/array/traffic-analytics-time-range';

export const TOKEN_MARKETING_SETTING = [
	{ key: 'traffic-analytics-time-range', label: 'Traffic Analytics Time Range', domain: 'marketing', controlKind: 'radio', values: TRAFFIC_ANALYTICS_TIME_RANGE }
] satisfies readonly Token[];