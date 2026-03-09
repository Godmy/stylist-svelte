export const CALENDAR = ['day', 'week', 'month'] as const;
export type CalendarViewMode = (typeof CALENDAR)[number];
