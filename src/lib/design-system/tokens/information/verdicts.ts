/**
 * Informational verdict tokens.
 */
export const VERDICTS = [
	'silent',
	'info',
	'warning',
	'danger',
	'error',
	'success'
] as const;

export type NotificationType = (typeof VERDICTS)[number];
