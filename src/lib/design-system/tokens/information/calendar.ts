export const CALENDAR_VIEW_MODES = ['day', 'week', 'month'] as const;
export type CalendarViewMode = (typeof CALENDAR_VIEW_MODES)[number];
