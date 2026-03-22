import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenSelectorKind } from '$stylist/design-system/tokens/interaction/selection-kind';
export interface IQuantitySelectorProps extends InteractionHTMLAttributes<HTMLDivElement> {
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	disabled?: boolean;
	variant?: TokenSelectorKind;
	size?: TokenSize;
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




