import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { ToggleButtonGroupOption } from '$stylist/control/type/struct/toggle-button-group-option';

export type ToggleButtonGroupProps = {
	options: ToggleButtonGroupOption[];
	value?: string | string[];
	multiple?: boolean;
	disabled?: boolean;
	size?: 'sm' | 'md' | 'lg';
	class?: string;
	buttonClass?: string;
	activeButtonClass?: string;
	inactiveButtonClass?: string;
	onValueInput?: (value: string | string[]) => void;
	onValueChange?: (value: string | string[]) => void;
	onInput?: (value: string | string[]) => void;
	onChange?: (value: string | string[]) => void;
} & HTMLAttributes<HTMLDivElement> &
	SlotInteraction;
