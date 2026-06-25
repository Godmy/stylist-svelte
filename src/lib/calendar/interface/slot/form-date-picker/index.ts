import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotFormDatePicker
	extends Omit<HTMLAttributes<HTMLInputElement> & SlotInteraction, 'class' | 'value' | 'on:input' | 'on:change'
	> {
	value?: string;
	class?: string;
	inputClass?: string;
	calendarClass?: string;
	label?: string;
	helperText?: string;
	error?: string;
	minDate?: string;
	maxDate?: string;
	placeholder?: string;
	onValueInput?: (value: string, event?: Event) => void;
	onValueChange?: (value: string, event?: Event) => void;
	onInput?: (value: string, event?: Event) => void;
	onChange?: (value: string, event?: Event) => void;
}
