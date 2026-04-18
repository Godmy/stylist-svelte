import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';
import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';
import type { SlotCalendarDay } from '$stylist/calendar/interface/slot/calendar-day';

export interface SlotEventCalendar {
	events?: SlotCalendarEvent[];
	initialDate?: Date;
	viewMode?: TokenTimeMeasure;
	selectedDate?: Date;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	class?: string;
	showAllDayEvents?: boolean;
	showEventDuration?: boolean;
	onEventClick?: (event: SlotCalendarEvent) => void;
	onEventCreate?: (date: Date) => void;
	onEventEdit?: (event: SlotCalendarEvent) => void;
	onEventDelete?: (event: SlotCalendarEvent) => void;
	onDayClick?: (day: SlotCalendarDay) => void;
	onViewModeChange?: (mode: TokenTimeMeasure) => void;
}
