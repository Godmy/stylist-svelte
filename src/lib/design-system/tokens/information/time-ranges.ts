export const PERFORMANCE_RANGES = ['1d', '7d', '30d', '90d'] as const;

export type TimeRange = (typeof PERFORMANCE_RANGES)[number];
