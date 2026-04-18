import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotTimeSlotEvent as SlotTimeSlotEvent } from '$stylist/calendar/interface/slot/time-slot-event';
import type { HTMLAttributes } from 'svelte/elements';

export interface TimeSlotProps extends StructIntersectAll<[Omit<HTMLAttributes<HTMLDivElement>, 'class'>]> {
	start: Date;
	end: Date;
	timeLabel?: string;
	available?: boolean;
	selected?: boolean;
	active?: boolean;
	events?: SlotTimeSlotEvent[];
	class?: string;
	onValueInput?: (slot: { start: Date; end: Date; timeLabel?: string; available?: boolean; selected?: boolean; active?: boolean; events?: SlotTimeSlotEvent[] }) => void;
	onValueChange?: (slot: { start: Date; end: Date; timeLabel?: string; available?: boolean; selected?: boolean; active?: boolean; events?: SlotTimeSlotEvent[] }) => void;
	onClick?: (slot: { start: Date; end: Date; timeLabel?: string; available?: boolean; selected?: boolean; active?: boolean; events?: SlotTimeSlotEvent[] }) => void;
	onKeyDown?: (event: KeyboardEvent) => void;
}
