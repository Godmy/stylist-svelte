import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { DateRangeValue } from '../date-range-value';

export interface DateRangePickerProps
	extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'oninput' | 'value'> {
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
