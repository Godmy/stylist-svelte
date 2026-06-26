import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';
import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';

export interface RecipeEventCalendar extends ComputeIntersectAll<[SlotChildren]> {
	events?: SlotCalendarEvent[];
	initialDate?: Date;
	viewMode?: TokenTimeMeasure;
	class?: string;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	showAllDayEvents?: boolean;
	showEventDuration?: boolean;
	onEventClick?: (event: SlotCalendarEvent) => void;
	onEventCreate?: (date: Date) => void;
	onEventEdit?: (event: SlotCalendarEvent) => void;
	onEventDelete?: (event: SlotCalendarEvent) => void;
}
