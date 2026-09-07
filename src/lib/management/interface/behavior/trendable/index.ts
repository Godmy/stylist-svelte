import type { TokenTrend } from '$stylist/management/type/alias/trend';

export interface BehaviorTrendable {
	trend?: TokenTrend | 'up' | 'down' | 'neutral';
	trendValue?: string | number;
	change?: number;
	changeType?: 'positive' | 'negative';
}
