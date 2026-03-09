export const NOTIFICATION_CHANNELS = ['email', 'push', 'sms', 'in_app'] as const;

export type NotificationChannel = (typeof NOTIFICATION_CHANNELS)[number];
