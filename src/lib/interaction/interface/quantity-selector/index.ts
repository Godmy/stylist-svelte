import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenSelectorKind } from '$stylist/interaction/type/token/selection-kind';
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




