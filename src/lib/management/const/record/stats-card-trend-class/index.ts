import type { TOKEN_TREND } from '$stylist/management/const/array/trend';

export const STATS_CARD_TREND_CLASS: Record<(typeof TOKEN_TREND)[number], string> = {
	up: 'c-stats-card__trend--up',
	down: 'c-stats-card__trend--down',
	neutral: 'c-stats-card__trend--neutral'
} as const;
