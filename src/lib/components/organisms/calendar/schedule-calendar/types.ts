/**
 * ScheduleCalendar Component Types
 */

import type { CalendarEvent } from '../../../molecules/controls/calendar/types';

// Re-export shared calendar type
export type { CalendarEvent } from '../../../molecules/controls/calendar/types';

/**
 * Priority level for events
 */
export type EventPriority = 'low' | 'medium' | 'high' | 'urgent';

/**
 * Represents a schedule event
 */
export type ScheduleEvent = CalendarEvent & {
  /**
   * Priority level of the event
   */
  priority?: EventPriority;
};

/**
 * Represents a time slot in the schedule calendar
 */
export interface ScheduleTimeSlot {
  /**
   * Time display string for the slot (e.g., "9 AM")
   */
  time: string;

  /**
   * The hour of the slot
   */
  hour: number;

  /**
   * Events in this time slot
   */
  events: ScheduleEvent[];
};

/**
 * Represents a day's schedule
 */
export interface DaySchedule {
  /**
   * Date of the day
   */
  date: Date;

  /**
   * Day of the week (e.g., "Mon")
   */
  dayOfWeek: string;

  /**
   * Date string (e.g., "Nov 1")
   */
  dateStr: string;

  /**
   * Time slots for this day
   */
  slots: ScheduleTimeSlot[];
}

/**
 * Props for the ScheduleCalendar component
 */
export interface IScheduleCalendarProps {
  /**
   * Array of events to display
   */
  events?: ScheduleEvent[];

  /**
   * Start date for the schedule view
   * @default new Date()
   */
  startDate?: Date;

  /**
   * End date for the schedule view
   * @default startDate + 6 days
   */
  endDate?: Date;

  /**
   * Start time for the schedule (hour in 24-hour format)
   * @default 8
   */
  startTime?: number;

  /**
   * End time for the schedule (hour in 24-hour format)
   * @default 20
   */
  endTime?: number;

  /**
   * Whether to show the header with navigation controls
   * @default true
   */
  showHeader?: boolean;

  /**
   * Whether to show the time gutter with time labels
   * @default true
   */
  showTimeGutter?: boolean;

  /**
   * Height of each time slot in pixels
   * @default 60
   */
  timeSlotHeight?: number;

  /**
   * Additional CSS class for slots
   */
  slotClass?: string;

  /**
   * Additional CSS class for events
   */
  eventClass?: string;

  /**
   * Additional CSS class for headers
   */
  headerClass?: string;

  /**
   * Additional CSS classes
   */
  class?: string;

  /**
   * Callback fired when a time slot is clicked
   */
  onSlotClick?: (date: Date) => void;

  /**
   * Callback fired when an event is clicked
   */
  onEventClick?: (event: ScheduleEvent) => void;
}
