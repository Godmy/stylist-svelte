import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/interface/slot';
import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';
import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { Snippet } from 'svelte';

// ==================== MiniCalendar ====================
export interface SlotMiniCalendarEvent {
	id?: string;
	title: string;
	start: Date;
	end?: Date;
	description?: string;
	color?: string;
}
