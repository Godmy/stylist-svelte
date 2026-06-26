import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotDateTimeRangePickerComponent
	extends HTMLAttributes<HTMLInputElement>, SlotInteraction {
	value?: { start: Date | null; end: Date | null };
	disabled?: boolean;
	placeholder?: string;
	class?: string;
	calendarClass?: string;
	inputClass?: string;
	onInput?: (value: { start: Date | null; end: Date | null }) => void;
	onChange?: (value: { start: Date | null; end: Date | null }) => void;
}
