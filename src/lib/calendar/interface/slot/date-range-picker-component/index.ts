import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { DateRangeValue } from '$stylist/calendar/type/struct/interaction-input-date-range-value';

export interface SlotDateRangePickerComponent extends HTMLAttributes<HTMLInputElement>, SlotInteraction {
	value?: DateRangeValue;
	disabled?: boolean;
	placeholder?: string;
	class?: string;
	calendarClass?: string;
	inputClass?: string;
	buttonClass?: string;
	onInput?: (value: { start: Date | null; end: Date | null }) => void;
	onChange?: (value: { start: Date | null; end: Date | null }) => void;
}
