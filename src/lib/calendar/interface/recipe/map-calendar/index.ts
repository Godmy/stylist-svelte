import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/interface/slot';
import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';
import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { Snippet } from 'svelte';
import type { RecipeCalendarView as CalendarViewContract } from '$stylist/calendar/interface/recipe/calendar-view';
import type { RecipeEventCalendar as EventCalendarContract } from '$stylist/calendar/interface/recipe/event-calendar';
import type { RecipeScheduleCalendar as ScheduleCalendarContract } from '$stylist/calendar/interface/recipe/schedule-calendar';
import type { RecipeTimeGrid as TimeGridContract } from '$stylist/calendar/interface/recipe/time-grid';
import type { RecipeMiniCalendar as MiniCalendarContract } from '$stylist/calendar/interface/recipe/mini-calendar';
import type { RecipeRealTimePresence as RealTimePresenceContract } from '$stylist/calendar/interface/recipe/real-time-presence';
import type { RecipeTimeline as TimelineContract } from '$stylist/calendar/interface/recipe/timeline';
import type { ContractTimeSlot as TimeSlotContract } from '$stylist/calendar/interface/contract/time-slot';

// ==================== Map Calendar Contract ====================
export interface RecipeMapCalendar extends StructIntersectAll<[]> {
	RecipeCalendarView: CalendarViewContract;
	EventCalendar: EventCalendarContract;
	ScheduleCalendar: ScheduleCalendarContract;
	TimeGrid: TimeGridContract;
	MiniCalendar: MiniCalendarContract;
	RealTimePresence: RealTimePresenceContract;
	RecipeTimeline: TimelineContract;
	TimeSlot: TimeSlotContract;
}
