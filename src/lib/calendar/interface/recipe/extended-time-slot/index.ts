import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/interface/slot';
import type { RecipeCalendarEvent as RecipeCalendarEvent } from '$stylist/calendar/interface/recipe/calendar-event-event-calendar';
import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';

export interface RecipeExtendedTimeSlot extends StructIntersectAll<[]> {
	start: Date;
	end: Date;
	timeLabel: string;
	available: boolean;
	events: SlotCalendarEvent[];
	hour: number;
	minute: number;
	time: string;
}
