import type { CalendarEventMini as CalendarEvent } from '$stylist/calendar/type/struct';

/**
 * Props for the MiniCalendar component
 */
export interface IMiniCalendarProps {
  /**
   * Currently selected date
   */
  selectedDate?: Date;

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
   * Whether to show the calendar in compact mode
   * @default false
   */
  compact?: boolean;

  /**
   * Whether to show the 'Today' button
   * @default true
   */
  showToday?: boolean;

  /**
   * Whether to show week numbers
   * @default false
   */
  showWeekNumbers?: boolean;

  /**
   * Additional CSS classes for day elements
   */
  dayClass?: string;

  /**
   * Additional CSS classes for event elements
   */
  eventClass?: string;

  /**
   * Additional CSS classes for header elements
   */
  headerClass?: string;

  /**
   * Additional CSS classes
   */
  class?: string;

  /**
   * Callback fired when a date is selected
   */
  onDateSelect?: (date: Date) => void;

  /**
   * Callback fired when an event is clicked
   */
  onEventClick?: (event: CalendarEvent) => void;
}
