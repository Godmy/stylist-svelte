import type { StatsCardTrend } from '$stylist/analytics/type/struct/stats-card';

const STATS_CARD_TREND_ICON = {
	up: 'arrow-up',
	down: 'arrow-down',
	neutral: 'minus'
} as const;

const STATS_CARD_TREND_CLASS = {
	up: 'text-emerald-600',
	down: 'text-rose-600',
	neutral: 'text-[var(--color-text-secondary)]'
} as const;

export class ObjectManagerStatsCard {
	static resolveTrendClass(trend: StatsCardTrend): string {
		return STATS_CARD_TREND_CLASS[trend];
	}

	static resolveTrendIconName(trend: StatsCardTrend): string {
		return STATS_CARD_TREND_ICON[trend];
	}
}
