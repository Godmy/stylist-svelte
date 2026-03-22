export const TOKEN_NOTIFICATION_CHANNEL = ['email', 'push', 'sms', 'in_app'] as const;

export type NotificationChannel = (typeof TOKEN_NOTIFICATION_CHANNEL)[number];
