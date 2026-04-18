import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { SlotCalendarEvent as RecipeCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';
import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';

export interface SlotScheduleEvent extends SlotCalendarEvent {
	priority?: TokenPriority;
}
