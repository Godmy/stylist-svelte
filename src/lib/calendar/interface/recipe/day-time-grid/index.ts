import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/interface/slot';
import type { RecipeCalendarEvent as RecipeCalendarEvent } from '$stylist/calendar/interface/recipe/calendar-event-event-calendar';
import type { RecipeExtendedTimeSlot } from '$stylist/calendar/interface/recipe/extended-time-slot';

export interface RecipeDayTimeGrid extends StructIntersectAll<[]> {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: RecipeExtendedTimeSlot[];
}
