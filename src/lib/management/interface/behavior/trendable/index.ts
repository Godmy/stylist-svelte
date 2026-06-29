import type { TokenTrend } from '$stylist/management/type/alias/trend';

/** Динамика метрики: тренд и изменение */
export interface BehaviorTrendable {
	trend?: TokenTrend | 'up' | 'down' | 'neutral';
	trendValue?: string | number;
	change?: number;
	changeType?: 'positive' | 'negative';
}
