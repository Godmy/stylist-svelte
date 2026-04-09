import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { CalendarHTMLAttributes, ChildrenHtmlAttributes } from '$stylist/calendar/type/struct';
import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';

export interface CalendarEvent {
	id: string;
	title: string;
	start: Date;
	end: Date;
	color?: string;
	allDay?: boolean;
	location?: string;
	description?: string;
}

export interface CalendarDay {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected?: boolean;
	hasEvent?: boolean;
	events: CalendarEvent[];
}

export interface EventCalendarContractBase {
	events?: CalendarEvent[];
	initialDate?: Date;
	viewMode?: TokenTimeMeasure;
	class?: string;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	showAllDayEvents?: boolean;
	showEventDuration?: boolean;
	onEventClick?: (event: CalendarEvent) => void;
	onEventCreate?: (date: Date) => void;
	onEventEdit?: (event: CalendarEvent) => void;
	onEventDelete?: (event: CalendarEvent) => void;
}

export type EventCalendarContract = RecordArchitectureMerge<
	[
		EventCalendarContractBase,
		CalendarHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement>
	]
>;
