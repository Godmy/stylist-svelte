import type { CalendarEventTimeGrid as RecipeCalendarEvent } from '$stylist/calendar/type/struct';
import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';

// TimeGrid props interface
export interface SlotTimeGrid {
  events?: SlotCalendarEvent[];
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
  onEventClick?: (event: SlotCalendarEvent) => void;
  onSlotClick?: (slotDate: Date) => void;
}
