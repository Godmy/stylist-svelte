import type { DateRangeValue } from '$stylist/input/type/struct/interaction-input/date-range-value';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface DateRangePickerComponentProps extends InteractionHTMLAttributes<HTMLInputElement> {
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
