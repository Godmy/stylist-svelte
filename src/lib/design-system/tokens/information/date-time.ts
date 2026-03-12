export const CALENDAR = ['day', 'week', 'month'] as const;
export const PERFORMANCE_RANGES = ['1d', '7d', '30d', '90d'] as const;
export const TIMESTAMP_FORMAT = ['datetime', 'time', 'date'] as const;

export type CalendarViewMode = (typeof CALENDAR)[number];
export type TimeRange = (typeof PERFORMANCE_RANGES)[number];
export type MessageTimestampFormatStyle = (typeof TIMESTAMP_FORMAT)[number];
