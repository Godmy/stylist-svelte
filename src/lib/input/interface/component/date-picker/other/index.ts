import type { HTMLInputAttributes } from 'svelte/elements';

export interface IDatePickerProps extends HTMLInputAttributes {
	value?: Date;
	minDate?: Date;
	maxDate?: Date;
	disabled?: boolean;
	placeholder?: string;
	dateFormat?: string;
}
