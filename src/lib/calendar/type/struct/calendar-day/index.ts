import type { CalendarEventMini } from '$stylist/calendar/type/struct/calendar-event-mini';

export type CalendarDay = {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected?: boolean;
	hasEvent: boolean;
	events: CalendarEventMini[];
};
