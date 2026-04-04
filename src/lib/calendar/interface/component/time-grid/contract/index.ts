import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct/item';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/type/struct/children';
import type { CalendarEvent } from '$stylist/calendar/interface/component/event-calendar/contract';

export interface ExtendedTimeSlot {
	start: Date;
	end: Date;
	timeLabel: string;
	available: boolean;
	events: CalendarEvent[];
	hour: number;
	minute: number;
	time: string;
}

export interface DayTimeGrid {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: ExtendedTimeSlot[];
}

export interface TimeGridContractBase {
	events?: CalendarEvent[];
	startDate?: Date;
	endDate?: Date;
	startTime?: number;
	endTime?: number;
	timeStep?: number;
	showHeader?: boolean;
	showCurrentTimeIndicator?: boolean;
	showAllDayEvents?: boolean;
	class?: string;
	slotClass?: string;
	eventClass?: string;
	headerClass?: string;
	onEventClick?: (event: CalendarEvent) => void;
	onSlotClick?: (slotDate: Date) => void;
}

export type TimeGridContract = RecordArchitectureMerge<
	[
		TimeGridContractBase,
		CalendarHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement>
	]
>;
