export const KPI_STATUSES = ['on-track', 'at-risk', 'off-track', 'exceeded'] as const;
export type KPIStatus = (typeof KPI_STATUSES)[number];

export const KPI_TRENDS = ['up', 'down', 'neutral'] as const;
export type KPITrend = (typeof KPI_TRENDS)[number];
