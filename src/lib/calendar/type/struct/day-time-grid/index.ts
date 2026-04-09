import type { ExtendedTimeSlot } from '$stylist/calendar/type/struct/extended-time-slot';

export type DayTimeGrid = {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: ExtendedTimeSlot[];
};
