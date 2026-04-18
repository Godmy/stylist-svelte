import type { TokenTrend } from '$stylist/management/type/enum/trend';

export const KPI_TREND_ICON_NAME = {
	up: 'trending-up',
	down: 'trending-down',
	neutral: 'minus'
} as const satisfies Record<TokenTrend, string>;

