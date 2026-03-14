export const STATUS_INDICATOR_STATUSES = [
    'online',
    'offline',
    'away',
    'busy',
    'success',
    'warning',
    'error',
    'info',
    'neutral',
    'custom'
] as const;
export type StatusIndicatorStatus = (typeof STATUS_INDICATOR_STATUSES)[number];
