export const KPI_TRENDS = ['up', 'down', 'neutral'] as const;
export type KPITrend = (typeof KPI_TRENDS)[number];
