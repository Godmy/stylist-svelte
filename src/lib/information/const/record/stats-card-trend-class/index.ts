import type { StatsCardTrend } from '$stylist/information/type/struct/stats-card';

export const STATS_CARD_TREND_CLASS: Record<StatsCardTrend, string> = {
	up: 'text-emerald-600',
	down: 'text-rose-600',
	neutral: 'text-[var(--color-text-secondary)]'
} as const;
