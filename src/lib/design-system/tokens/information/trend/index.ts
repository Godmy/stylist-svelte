export const TOKEN_TREND = ['up', 'down', 'neutral'] as const;

export type TokenTrend = (typeof TOKEN_TREND)[number];
