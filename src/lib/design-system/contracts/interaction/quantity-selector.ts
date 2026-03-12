import type { HTMLAttributes } from 'svelte/elements';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { QuantitySelectorVariant as QuantitySelectorVariantToken } from '$stylist/design-system/tokens/interaction/variants';

export type QuantitySelectorVariant = QuantitySelectorVariantToken;

export interface IQuantitySelectorProps extends HTMLAttributes<HTMLDivElement> {
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	disabled?: boolean;
	variant?: QuantitySelectorVariant;
	size?: ComponentSize;
	class?: string;
	inputClass?: string;
	buttonClass?: string;
	onValueChange?: (value: number) => void;
	onIncrement?: (value: number) => void;
	onDecrement?: (value: number) => void;
	showInput?: boolean;
	showButtons?: boolean;
	label?: string;
}


