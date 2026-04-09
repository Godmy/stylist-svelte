import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface IDateTimePickerProps extends InteractionHTMLAttributes<HTMLInputElement> {
	value?: Date;
	minDate?: Date;
	maxDate?: Date;
	disabled?: boolean;
	class?: string;
	dateClass?: string;
	timeClass?: string;
	dropdownClass?: string;
	placeholder?: string;
}
