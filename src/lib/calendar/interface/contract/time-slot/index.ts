import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/interface/slot';
import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';
import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { Snippet } from 'svelte';
import type { SlotTimeSlotEvent } from '$stylist/calendar/interface/slot/time-slot-event';

export interface ContractTimeSlot {
	start: Date;
	end: Date;
	timeLabel?: string;
	available?: boolean;
	selected?: boolean;
	active?: boolean;
	events?: SlotTimeSlotEvent[];
	class?: string;
	onValueInput?: (slot: ContractTimeSlot) => void;
	onValueChange?: (slot: ContractTimeSlot) => void;
	onClick?: (slot: ContractTimeSlot) => void;
	onKeyDown?: (event: KeyboardEvent) => void;
}
