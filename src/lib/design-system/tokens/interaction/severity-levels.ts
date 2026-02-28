/** Severity levels for status indicators. */
export const SEVERITY_LEVELS = ['low', 'medium', 'high', 'critical'] as const;
export type SeverityLevel = (typeof SEVERITY_LEVELS)[number];
