import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct';
import type { CalendarEvent } from '$stylist/calendar/interface/component/event-calendar/contract';

export interface TimeSlotContractBase {
	start: Date;
	end: Date;
	timeLabel?: string;
	available?: boolean;
	selected?: boolean;
	active?: boolean;
	events?: CalendarEvent[];
	class?: string;
	onValueInput?: (slot: TimeSlotContractBase) => void;
	onValueChange?: (slot: TimeSlotContractBase) => void;
	onClick?: (slot: TimeSlotContractBase) => void;
	onKeyDown?: (event: KeyboardEvent) => void;
}

export type TimeSlotContract = RecordArchitectureMerge<
	[
		TimeSlotContractBase,
		CalendarHTMLAttributes<HTMLDivElement>
	]
>;
