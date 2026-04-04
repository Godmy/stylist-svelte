import type { CalendarEvent } from '$stylist/calendar/type/struct/time-grid/event';

// Extended time slot type
export type ExtendedTimeSlot = {
  start: Date;
  end: Date;
  timeLabel: string;
  available: boolean;
  events: CalendarEvent[];
  hour: number;
  minute: number;
  time: string;
};
