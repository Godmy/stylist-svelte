export const TOKEN_TIME_MEASURE = ['day', 'week', 'month'] as const;

export type TokenTimeMeasure = (typeof TOKEN_TIME_MEASURE)[number];
