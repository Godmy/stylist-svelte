/**
 * Shared calendar control types used across molecules/organisms.
 */

export type CalendarViewMode = 'month' | 'week' | 'day';

export interface CalendarEvent {
  id: string | number;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  description?: string;
  location?: string;
  color?: string;
}

export interface CalendarDay {
  date: Date;
  dayNumber: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected?: boolean;
  events?: CalendarEvent[];
}