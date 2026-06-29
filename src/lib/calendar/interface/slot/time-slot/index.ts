import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';

export interface SlotTimeSlot {
	start: Date;
	end: Date;
	timeLabel?: string;
	available?: boolean;
	selected?: boolean;
	active?: boolean;
	events?: SlotCalendarEvent[];
	hour?: number;
	minute?: number;
	time?: string;
	class?: string;
	onChange?: (slot: SlotTimeSlot) => void;
	onClick?: (slot: SlotTimeSlot) => void;
	onKeyDown?: (event: KeyboardEvent) => void;
}
