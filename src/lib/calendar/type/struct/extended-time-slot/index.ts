export type CalendarEventTimeGrid = {
	id: string;
	title: string;
	start: Date;
	end: Date;
	color?: string;
};

export type ExtendedTimeSlot = {
	start: Date;
	end: Date;
	timeLabel: string;
	available: boolean;
	events: CalendarEventTimeGrid[];
	hour: number;
	minute: number;
	time: string;
};
