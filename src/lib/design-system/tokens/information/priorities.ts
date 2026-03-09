export const PRIORITES = ['low', 'medium', 'high', 'urgent', 'critical'] as const;
export type Priority = (typeof PRIORITES)[number];
