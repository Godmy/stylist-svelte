import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { SlotCalendarEvent as RecipeCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';
import type { SlotScheduleEvent } from '$stylist/calendar/interface/slot/schedule-event';

export interface SlotScheduleCalendar {
	events?: SlotScheduleEvent[];
	startDate?: Date;
	endDate?: Date;
	startTime?: number;
	endTime?: number;
	showHeader?: boolean;
	showTimeGutter?: boolean;
	timeSlotHeight?: number;
	slotClass?: string;
	eventClass?: string;
	headerClass?: string;
	class?: string;
	onSlotClick?: (date: Date) => void;
	onEventClick?: (event: SlotScheduleEvent) => void;
}
