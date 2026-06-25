import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { DateRangeValue } from '$stylist/calendar/type/struct/interaction-input-date-range-value';

export interface DateRangePickerProps
	extends ComputeIntersectAll<
		[Omit<HTMLAttributes<HTMLDivElement>, 'oninput' | 'value'> & SlotInteraction]
	> {
	value?: DateRangeValue;
	disabled?: boolean;
	placeholder?: string;
	class?: string;
	calendarClass?: string;
	inputClass?: string;
	buttonClass?: string;
	onInput?: (value: DateRangeValue) => void;
	onChange?: (value: DateRangeValue) => void;
}
