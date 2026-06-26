import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';
import type { SlotSchedule } from '$stylist/calendar/interface/slot/schedule';

export interface RecipeTimeGrid extends ComputeIntersectAll<[SlotChildren, SlotSchedule]> {
	events?: SlotCalendarEvent[];
	timeStep?: number;
	showCurrentTimeIndicator?: boolean;
	showAllDayEvents?: boolean;
	class?: string;
	onEventClick?: (event: SlotCalendarEvent) => void;
	onSlotClick?: (slotDate: Date) => void;
}
