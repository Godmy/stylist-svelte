import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/interface/slot';
import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';
import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { Snippet } from 'svelte';
import type { SlotCalendarViewEvent } from '$stylist/calendar/interface/slot/calendar-view-event';
import type { CalendarViewMode } from '$stylist/calendar/type/struct/calendar-view-mode';

export interface RecipeCalendarView extends StructIntersectAll<[]> {
	events?: SlotCalendarViewEvent[];
	initialDate?: Date;
	viewMode?: CalendarViewMode;
	showWeekNumbers?: boolean;
	weekendDays?: number[];
	class?: string;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	onEventClick?: (event: SlotCalendarViewEvent) => void;
	onDayClick?: (date: Date) => void;
	onEventCreate?: (date: Date) => void;	children?: Snippet;
}
