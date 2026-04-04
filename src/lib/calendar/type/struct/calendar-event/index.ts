// Calendar event type for MiniCalendar
export type CalendarEvent = {
  id?: string;
  title: string;
  start: Date;
  end?: Date;
  description?: string;
  color?: string;
};
