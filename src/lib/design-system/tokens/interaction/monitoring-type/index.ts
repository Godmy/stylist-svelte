export const TOKEN_MONITORING_TYPE = ['monitoring', 'reached', 'exceeded'] as const;

export type TokenMonitoringType = (typeof TOKEN_MONITORING_TYPE)[number];
