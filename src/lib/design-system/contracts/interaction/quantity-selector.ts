import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { QuantitySelectorVariant } from '$stylist/design-system/tokens/interaction/variants';
export interface IQuantitySelectorProps extends InteractionHTMLAttributes<HTMLDivElement> {
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



