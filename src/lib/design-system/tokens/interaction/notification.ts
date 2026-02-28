export const NOTIFICATION_TYPES = ['success', 'warning', 'error', 'info', 'default'] as const;
export type NotificationType = (typeof NOTIFICATION_TYPES)[number];

export const NOTIFICATION_POSITIONS = [
	'top-right',
	'top-left',
	'bottom-right',
	'bottom-left',
	'top-center',
	'bottom-center'
] as const;
export type NotificationPosition = (typeof NOTIFICATION_POSITIONS)[number];
