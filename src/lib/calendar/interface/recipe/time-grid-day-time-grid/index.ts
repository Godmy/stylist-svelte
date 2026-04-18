import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/interface/slot';
import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';
import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { Snippet } from 'svelte';
import type { RecipeTimeGridExtendedTimeSlot } from '$stylist/calendar/interface/recipe/time-grid-extended-time-slot';

export interface RecipeTimeGridDayTimeGrid extends StructIntersectAll<[]> {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: RecipeTimeGridExtendedTimeSlot[];
}
