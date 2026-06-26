import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';

export interface SlotMiniCalendar {
	selectedDate?: Date;
	events?: SlotCalendarEvent[];
	initialDate?: Date;
	compact?: boolean;
	showToday?: boolean;
	showWeekNumbers?: boolean;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	class?: string;
	onDateSelect?: (date: Date) => void;
	onEventClick?: (event: SlotCalendarEvent) => void;
}
