import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { SlotCalendarEvent as RecipeCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';
import type { SlotScheduleEvent } from '$stylist/calendar/interface/slot/schedule-event';

export interface SlotScheduleTimeSlot {
	time: string;
	hour: number;
	events: SlotScheduleEvent[];
}
