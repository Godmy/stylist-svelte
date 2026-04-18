import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/interface/slot';
import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';
import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { Snippet } from 'svelte';
import type { SlotMiniCalendarEvent } from '$stylist/calendar/interface/slot/mini-calendar-event';

export interface RecipeMiniCalendar extends StructIntersectAll<[]> {
	selectedDate?: Date;
	events?: SlotMiniCalendarEvent[];
	initialDate?: Date;
	compact?: boolean;
	showToday?: boolean;
	showWeekNumbers?: boolean;
	class?: string;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	onDateSelect?: (date: Date) => void;
	onEventClick?: (event: SlotMiniCalendarEvent) => void;
}
