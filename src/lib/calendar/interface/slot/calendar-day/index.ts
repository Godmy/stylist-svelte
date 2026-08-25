import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';
export interface SlotCalendarDay {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected?: boolean;
	hasEvent?: boolean;
	events: SlotCalendarEvent[];
}
