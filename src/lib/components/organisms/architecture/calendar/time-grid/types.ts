export type CalendarEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  location?: string;
  color?: string;
  allDay?: boolean;
};

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

export type DayTimeGrid = {
  date: Date;
  dayOfWeek: string;
  dateStr: string;
  slots: ExtendedTimeSlot[];
};

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
