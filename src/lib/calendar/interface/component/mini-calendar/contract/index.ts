import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { CalendarHTMLAttributes, ChildrenHtmlAttributes } from '$stylist/calendar/type/struct';
import type { CalendarEvent } from '$stylist/calendar/interface/component/event-calendar/contract';

export interface MiniCalendarDay {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected: boolean;
	hasEvent: boolean;
	events: CalendarEvent[];
}

export interface MiniCalendarContractBase {
	selectedDate?: Date;
	events?: CalendarEvent[];
	initialDate?: Date;
	compact?: boolean;
	showToday?: boolean;
	showWeekNumbers?: boolean;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	class?: string;
	onDateSelect?: (date: Date) => void;
	onEventClick?: (event: CalendarEvent) => void;
}

export type MiniCalendarContract = RecordArchitectureMerge<
	[
		MiniCalendarContractBase,
		CalendarHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement>
	]
>;
