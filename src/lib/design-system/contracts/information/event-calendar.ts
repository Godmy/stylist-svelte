/**
 * EventCalendar Component Types
 *
 * This file defines all TypeScript interfaces and types for the EventCalendar component
 * following SOLID principles and proper type safety.
 */

import type { CalendarViewMode, CalendarEvent, CalendarDay } from './calendar';

export type { CalendarViewMode, CalendarEvent, CalendarDay } from './calendar';

/**
 * Props for the EventCalendar component
 */
export interface IEventCalendarProps {
  /**
   * Array of events to display
   */
  events?: CalendarEvent[];

  /**
   * Initial date to display
   * @default new Date()
   */
  initialDate?: Date;

  /**
   * Initial view mode
   * @default 'month'
   */
  viewMode?: CalendarViewMode;

  /**
   * Initial selected date
   * @default new Date()
   */
  selectedDate?: Date;

  /**
   * Additional CSS class for day cells
   */
  dayClass?: string;

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
   * Whether to show all-day events
   * @default true
   */
  showAllDayEvents?: boolean;

  /**
   * Whether to show event duration
   * @default true
   */
  showEventDuration?: boolean;

  /**
   * Callback fired when an event is clicked
   */
  onEventClick?: (event: CalendarEvent) => void;

  /**
   * Callback fired when an event is created (day clicked)
   */
  onEventCreate?: (date: Date) => void;

  /**
   * Callback fired when an event is edited
   */
  onEventEdit?: (event: CalendarEvent) => void;

  /**
   * Callback fired when an event is deleted
   */
  onEventDelete?: (event: CalendarEvent) => void;

  /**
   * Callback fired when a day is clicked
   */
  onDayClick?: (day: CalendarDay) => void;

  /**
   * Callback fired when the view mode changes
   */
  onViewModeChange?: (mode: CalendarViewMode) => void;
}
