import type { TokenPriority } from '$stylist/design-system/tokens/information/priority';
import type { CalendarEvent } from '$stylist/design-system/contracts/information/event-calendar';

export interface ScheduleEvent extends CalendarEvent {
	priority?: TokenPriority;
}

export interface ScheduleTimeSlot {
	time: string;
	hour: number;
	events: ScheduleEvent[];
}

export interface DaySchedule {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: ScheduleTimeSlot[];
}

export interface IScheduleCalendarProps {
	events?: ScheduleEvent[];
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
	onEventClick?: (event: ScheduleEvent) => void;
}

