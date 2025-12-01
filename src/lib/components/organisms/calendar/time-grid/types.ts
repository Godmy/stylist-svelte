/**
 * TimeGrid Component Types
 */

import type { CalendarEvent } from '../../../molecules/controls/calendar/types';
import type { ITimeSlot as TimeSlot } from '../../../molecules/controls/calendar/time-slot/TimeSlot.types';

/**
 * Extended interface for internal use that includes time properties
 */
export interface ExtendedTimeSlot extends TimeSlot {
  /**
   * Hour of the time slot
   */
  hour: number;

  /**
   * Minute of the time slot
   */
  minute: number;

  /**
   * Time display string
   */
  time: string;
}

/**
 * Represents a day's time grid
 */
export interface DayTimeGrid {
  /**
   * The date object for this day
   */
  date: Date;

  /**
   * Day of the week (e.g. "Mon")
   */
  dayOfWeek: string;

  /**
   * Date string (e.g. "Nov 15")
   */
  dateStr: string;

  /**
   * Time slots for this day
   */
  slots: ExtendedTimeSlot[];
}

/**
 * Props for the TimeGrid component
 */
export interface ITimeGridProps {
  /**
   * Array of events to display
   */
  events?: CalendarEvent[];

  /**
   * Start date for the grid
   * @default new Date()
   */
  startDate?: Date;

  /**
   * End date for the grid
   * @default new Date(new Date().setDate(startDate.getDate() + 6))
   */
  endDate?: Date;

  /**
   * Start hour for the grid (0-23)
   * @default 0
   */
  startTime?: number;

  /**
   * End hour for the grid (0-23)
   * @default 24
   */
  endTime?: number;

  /**
   * Time interval in minutes
   * @default 60
   */
  timeStep?: number;

  /**
   * Whether to show the header
   * @default true
   */
  showHeader?: boolean;

  /**
   * Whether to show current time indicator
   * @default true
   */
  showCurrentTimeIndicator?: boolean;

  /**
   * Whether to show all day events
   * @default true
   */
  showAllDayEvents?: boolean;

  /**
   * Additional CSS classes for the host element
   */
  class?: string;

  /**
   * Additional CSS classes for time slots
   */
  slotClass?: string;

  /**
   * Additional CSS classes for events
   */
  eventClass?: string;

  /**
   * Additional CSS classes for header
   */
  headerClass?: string;

  /**
   * Callback fired when a time slot is clicked
   */
  onSlotClick?: (slot: Date) => void;

  /**
   * Callback fired when an event is clicked
   */
  onEventClick?: (event: CalendarEvent) => void;
}
