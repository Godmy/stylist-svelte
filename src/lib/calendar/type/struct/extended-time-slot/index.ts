import type { CalendarEventTimeGrid } from '$stylist/calendar/type/struct/calendar-event-time-grid';

export type RecipeExtendedTimeSlot = {
	start: Date;
	end: Date;
	timeLabel: string;
	available: boolean;
	events: CalendarEventTimeGrid[];
	hour: number;
	minute: number;
	time: string;
};
