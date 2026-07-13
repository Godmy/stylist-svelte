import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenSelectorKind } from '$stylist/control/type/alias/selection-kind';

export interface SlotQuantitySelector extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
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
