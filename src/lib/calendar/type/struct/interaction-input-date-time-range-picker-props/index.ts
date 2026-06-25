import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { DateTimeRangeValue } from '$stylist/calendar/type/struct/interaction-input-date-time-range-value';

export type DateTimeRangePickerProps = Omit<HTMLAttributes<HTMLDivElement> & SlotInteraction, 'oninput' | 'value'
> & {
	value?: DateTimeRangeValue;
	disabled?: boolean;
	placeholder?: string;
	class?: string;
	calendarClass?: string;
	inputClass?: string;
	buttonClass?: string;
	onInput?: (value: DateTimeRangeValue) => void;
	onChange?: (value: DateTimeRangeValue) => void;
};
