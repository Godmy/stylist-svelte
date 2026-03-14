export const NOTIFICATION_BADGE_POSITIONS = [
    'top-end',
    'top-start',
    'bottom-end',
    'bottom-start'
] as const;
export const NOTIFICATION_POSITIONS = [
    'top-end',
    'top-start',
    'bottom-end',
    'bottom-start',
    'top-center',
    'bottom-center'
] as const;
export type NotificationBadgePosition = (typeof NOTIFICATION_BADGE_POSITIONS)[number];
export type NotificationPosition = (typeof NOTIFICATION_POSITIONS)[number];
