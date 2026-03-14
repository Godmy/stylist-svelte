import type { CalendarViewMode } from '../../tokens/information/date-time';

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

export interface IEventCalendarProps {
	events?: CalendarEvent[];
	initialDate?: Date;
	viewMode?: CalendarViewMode;
	selectedDate?: Date;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	class?: string;
	showAllDayEvents?: boolean;
	showEventDuration?: boolean;
	onEventClick?: (event: CalendarEvent) => void;
	onEventCreate?: (date: Date) => void;
	onEventEdit?: (event: CalendarEvent) => void;
	onEventDelete?: (event: CalendarEvent) => void;
	onDayClick?: (day: CalendarDay) => void;
	onViewModeChange?: (mode: CalendarViewMode) => void;
}
