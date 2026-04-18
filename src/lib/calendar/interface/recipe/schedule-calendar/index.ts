import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/interface/slot';
import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';
import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { Snippet } from 'svelte';
import type { SlotScheduleCalendarEvent } from '$stylist/calendar/interface/slot/schedule-calendar-event';

export interface RecipeScheduleCalendar extends StructIntersectAll<[]> {
	events?: SlotScheduleCalendarEvent[];
	startDate?: Date;
	endDate?: Date;
	startTime?: number;
	endTime?: number;
	showHeader?: boolean;
	showTimeGutter?: boolean;
	timeSlotHeight?: number;
	slotClass?: string;
	eventClass?: string;
	headerClass?: string;
	class?: string;
	onSlotClick?: (date: Date) => void;
	onEventClick?: (event: SlotScheduleCalendarEvent) => void;	children?: Snippet;
}
