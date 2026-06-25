import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotRangeInput extends HTMLAttributes<HTMLInputElement>, SlotInteraction {
	min?: number;
	max?: number;
	minValue?: number;
	maxValue?: number;
	step?: number;
	disabled?: boolean;
	showInputFields?: boolean;
	class?: string;
	rangeClass?: string;
	inputClass?: string;
	onInput?: (value: { min: number; max: number }) => void;
	onChange?: (value: { min: number; max: number }) => void;
}
