import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';
import type { SlotSchedule } from '$stylist/calendar/interface/slot/schedule';

export interface RecipeScheduleCalendar extends ComputeIntersectAll<[SlotChildren, SlotSchedule]> {
	events?: SlotCalendarEvent[];
	showTimeGutter?: boolean;
	timeSlotHeight?: number;
	class?: string;
	onSlotClick?: (date: Date) => void;
	onEventClick?: (event: SlotCalendarEvent) => void;
}
