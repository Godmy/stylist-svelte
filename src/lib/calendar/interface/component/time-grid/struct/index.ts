import type { CalendarEventTimeGrid as CalendarEvent } from '$stylist/calendar/type/struct';

// TimeGrid props interface
export interface ITimeGridProps {
  events?: CalendarEvent[];
  startDate?: Date;
  endDate?: Date;
  startTime?: number;
  endTime?: number;
  timeStep?: number;
  showHeader?: boolean;
  showCurrentTimeIndicator?: boolean;
  showAllDayEvents?: boolean;
  class?: string;
  slotClass?: string;
  eventClass?: string;
  headerClass?: string;
  onEventClick?: (event: CalendarEvent) => void;
  onSlotClick?: (slotDate: Date) => void;
}
