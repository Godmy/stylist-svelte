import type { CalendarEvent } from '$stylist/calendar/type/struct/calendar-event';

// Calendar day type
export type CalendarDay = {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected?: boolean;
  hasEvent: boolean;
  events: CalendarEvent[];
};
