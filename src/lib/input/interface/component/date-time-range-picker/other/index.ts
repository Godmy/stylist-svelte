import type { DateTimeRangeValue } from '$stylist/input/type/struct/interaction-input/date-time-range-value';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface DateTimeRangePickerComponentProps extends InteractionHTMLAttributes<HTMLInputElement> {
	value?: DateTimeRangeValue;
	disabled?: boolean;
	placeholder?: string;
	class?: string;
	calendarClass?: string;
	inputClass?: string;
	onInput?: (value: { start: Date | null; end: Date | null }) => void;
	onChange?: (value: { start: Date | null; end: Date | null }) => void;
}
