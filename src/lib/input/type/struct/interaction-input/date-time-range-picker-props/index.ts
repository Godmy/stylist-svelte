import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { DateTimeRangeValue } from '$stylist/input/type/struct/interaction-input-date-time-range-value';

export type DateTimeRangePickerProps = Omit<InteractionHTMLAttributes<HTMLDivElement> & 'oninput' | 'value'> & {
	value?: DateTimeRangeValue;
	disabled?: boolean;
	placeholder?: string;
	class?: string;
	calendarClass?: string;
	inputClass?: string;
	buttonClass?: string;
	onInput?: (value: DateTimeRangeValue) => void;
	onChange?: (value: DateTimeRangeValue) => void;
}
