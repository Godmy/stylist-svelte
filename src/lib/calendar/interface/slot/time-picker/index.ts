import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotTimePicker extends HTMLAttributes<HTMLInputElement>, SlotInteraction {
	value?: string;
	disabled?: boolean;
	class?: string;
	showSeconds?: boolean;
	step?: number;
	onChange?: (time: string) => void;
	onValueChange?: (time: string) => void;
}
