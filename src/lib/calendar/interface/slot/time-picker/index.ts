import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotTimePicker extends HTMLAttributes<HTMLInputElement>, SlotInteraction {
	value?: string;
	disabled?: boolean;
	class?: string;
	dropdownClass?: string;
	showSeconds?: boolean;
	onValueInput?: (time: string) => void;
	onValueChange?: (time: string) => void;
	onChange?: (time: string) => void;
}
