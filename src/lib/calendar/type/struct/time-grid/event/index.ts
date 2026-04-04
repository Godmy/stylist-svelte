// Calendar event type
export type CalendarEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  location?: string;
  color?: string;
  allDay?: boolean;
};
