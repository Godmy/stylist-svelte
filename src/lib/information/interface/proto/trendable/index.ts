import type { TokenTrend } from '$stylist/information/type/enum/trend';

/** Динамика метрики: тренд и изменение */
export interface ITrendable {
	trend?: TokenTrend | 'up' | 'down' | 'neutral';
	trendValue?: string | number;
	change?: number;
	changeType?: 'positive' | 'negative';
}
