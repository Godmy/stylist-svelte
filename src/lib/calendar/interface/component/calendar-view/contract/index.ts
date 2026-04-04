import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct/item';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/type/struct/children';
import type { TokenTimeMeasure } from '$stylist/information/type/enum/time-measure';

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

export type ViewMode = 'day' | 'week' | 'month';

export interface CalendarViewContractBase {
	events?: CalendarEvent[];
	initialDate?: Date;
	viewMode?: ViewMode;
	showWeekNumbers?: boolean;
	weekendDays?: number[];
	class?: string;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	onEventClick?: (event: CalendarEvent) => void;
	onDayClick?: (date: Date) => void;
	onEventCreate?: (date: Date) => void;
}

export type CalendarViewContract = RecordArchitectureMerge<
	[
		CalendarViewContractBase,
		CalendarHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement>
	]
>;
