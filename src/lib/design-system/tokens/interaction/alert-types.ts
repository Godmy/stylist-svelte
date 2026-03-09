export const ALERT_TYPES = ['monitoring', 'reached', 'exceeded'] as const;

export type AlertType = (typeof ALERT_TYPES)[number];
