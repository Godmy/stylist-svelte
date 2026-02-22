/**
 * Shared Calendar Types
 * 
 * Common types used across calendar components
 */

export type CalendarEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  color?: string;
  allDay?: boolean;
  location?: string;
  description?: string;
};

export type CalendarDay = {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected?: boolean;
  hasEvent?: boolean;
  events: CalendarEvent[];
};

export type CalendarViewMode = 'day' | 'week' | 'month';
