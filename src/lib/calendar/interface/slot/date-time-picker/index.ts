import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotDateTimePicker extends HTMLAttributes<HTMLInputElement>, SlotInteraction {
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
