import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { DateTimeRangeValue } from '$stylist/calendar/type/struct/interaction-input-date-time-range-value';

export interface SlotDateTimeRangePickerComponent
	extends HTMLAttributes<HTMLInputElement>, SlotInteraction {
	value?: DateTimeRangeValue;
	disabled?: boolean;
	placeholder?: string;
	class?: string;
	calendarClass?: string;
	inputClass?: string;
	onInput?: (value: { start: Date | null; end: Date | null }) => void;
	onChange?: (value: { start: Date | null; end: Date | null }) => void;
}
