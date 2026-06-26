import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';

export interface SlotScheduleTimeSlot {
	time: string;
	hour: number;
	events: SlotCalendarEvent[];
}
