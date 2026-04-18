import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';

export interface SlotCalendarEvent {
	id: string;
	title: string;
	start: Date;
	end: Date;
	color?: string;
	allDay?: boolean;
	location?: string;
	description?: string;
}
