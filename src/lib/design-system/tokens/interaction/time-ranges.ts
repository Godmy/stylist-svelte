export const PERFORMANCE_TIME_RANGES = ['1d', '7d', '30d', '90d'] as const;

export type TimeRange = (typeof PERFORMANCE_TIME_RANGES)[number];
