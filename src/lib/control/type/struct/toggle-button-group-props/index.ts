import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ToggleButtonGroupOption } from '../toggle-button-group-option';

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
} & InteractionHTMLAttributes<HTMLDivElement>;
