import type { StatsCardTrend } from '$stylist/information/type/struct/stats-card';

export const STATS_CARD_TREND_ICON: Record<StatsCardTrend, string> = {
	up: 'arrow-up',
	down: 'arrow-down',
	neutral: 'minus'
} as const;
