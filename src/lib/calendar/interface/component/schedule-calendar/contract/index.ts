import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { CalendarHTMLAttributes, ChildrenHtmlAttributes } from '$stylist/calendar/type/struct';
import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { CalendarEvent } from '$stylist/calendar/interface/component/event-calendar/contract';

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

export interface ScheduleCalendarContractBase {
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

export type ScheduleCalendarContract = RecordArchitectureMerge<
	[
		ScheduleCalendarContractBase,
		CalendarHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement>
	]
>;
