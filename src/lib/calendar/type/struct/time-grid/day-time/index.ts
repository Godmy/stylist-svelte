import type { ExtendedTimeSlot } from '$stylist/calendar/type/struct/time-grid/time';

// Day time grid type
export type DayTimeGrid = {
  date: Date;
  dayOfWeek: string;
  dateStr: string;
  slots: ExtendedTimeSlot[];
};
