import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/interface/slot';
import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';
import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { Snippet } from 'svelte';
import type { SlotEventCalendarEvent } from '$stylist/calendar/interface/slot/event-calendar-event';

export interface RecipeEventCalendar extends StructIntersectAll<[]> {
	events?: SlotEventCalendarEvent[];
	initialDate?: Date;
	viewMode?: TokenTimeMeasure;
	class?: string;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	showAllDayEvents?: boolean;
	showEventDuration?: boolean;
	onEventClick?: (event: SlotEventCalendarEvent) => void;
	onEventCreate?: (date: Date) => void;
	onEventEdit?: (event: SlotEventCalendarEvent) => void;
	onEventDelete?: (event: SlotEventCalendarEvent) => void;	children?: Snippet;
}
