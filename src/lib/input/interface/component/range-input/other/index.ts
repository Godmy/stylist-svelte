import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface RangeInputProps extends InteractionHTMLAttributes<HTMLInputElement> {
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


