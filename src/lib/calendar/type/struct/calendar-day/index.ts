export type CalendarEventMini = {
	id: string;
	title: string;
	color?: string;
};

export type CalendarDay = {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected?: boolean;
	hasEvent: boolean;
	events: CalendarEventMini[];
};
