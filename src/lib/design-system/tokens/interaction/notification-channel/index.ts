export const TOKEN_NOTIFICATION_CHANNEL = ['email', 'push', 'sms', 'in_app'] as const;

export type TokenNotifictionChannel = (typeof TOKEN_NOTIFICATION_CHANNEL)[number];
