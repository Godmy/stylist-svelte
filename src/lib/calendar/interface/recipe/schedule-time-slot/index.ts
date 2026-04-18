import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/interface/slot';
import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { RecipeCalendarEvent as RecipeCalendarEvent } from '$stylist/calendar/interface/recipe/calendar-event-event-calendar';
import type { SlotScheduleEvent } from '$stylist/calendar/interface/slot/schedule-event';

export interface RecipeScheduleTimeSlot extends StructIntersectAll<[]> {
	time: string;
	hour: number;
	events: SlotScheduleEvent[];
}
