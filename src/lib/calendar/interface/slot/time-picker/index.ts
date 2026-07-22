import type { HTMLAttributes } from 'svelte/elements';

export interface SlotTimePicker extends HTMLAttributes<HTMLInputElement> {
	value?: string;
	disabled?: boolean;
	class?: string;
	showSeconds?: boolean;
	step?: number;
	onChange?: (time: string) => void;
	onValueChange?: (time: string) => void;
}
