export const CHART_TYPES = ['line', 'bar', 'pie'] as const;
export type ChartType = (typeof CHART_TYPES)[number];
