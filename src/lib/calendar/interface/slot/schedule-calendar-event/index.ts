import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/interface/slot';
import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';
import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { Snippet } from 'svelte';
import type { SlotEventCalendarEvent } from '$stylist/calendar/interface/slot/event-calendar-event';

// ==================== ScheduleCalendar ====================
export interface SlotScheduleCalendarEvent extends SlotEventCalendarEvent {
	priority?: TokenPriority;
}
