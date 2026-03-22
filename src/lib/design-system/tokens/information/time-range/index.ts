export const TOKEN_TIME_RANGE = ['1d', '7d', '30d', '90d'] as const;

export type TokenTimeRange = (typeof TOKEN_TIME_RANGE)[number];
