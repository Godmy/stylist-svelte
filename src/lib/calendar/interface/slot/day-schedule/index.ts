import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { SlotCalendarEvent as RecipeCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';
import type { SlotScheduleTimeSlot } from '$stylist/calendar/interface/slot/schedule-time-slot';

export interface SlotDaySchedule {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: SlotScheduleTimeSlot[];
}
