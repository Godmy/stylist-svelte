import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';

export interface ContractTimeSlot {
	start: Date;
	end: Date;
	timeLabel?: string;
	available?: boolean;
	selected?: boolean;
	active?: boolean;
	events?: SlotCalendarEvent[];
	class?: string;
	onValueInput?: (slot: ContractTimeSlot) => void;
	onValueChange?: (slot: ContractTimeSlot) => void;
	onClick?: (slot: ContractTimeSlot) => void;
	onKeyDown?: (event: KeyboardEvent) => void;
}
