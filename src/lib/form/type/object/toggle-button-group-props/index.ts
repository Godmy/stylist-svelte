import type { HTMLAttributes } from 'svelte/elements';

export type ToggleButtonGroupProps = {
	options: {
	value: string;
	label: string;
	icon?: string;
	disabled?: boolean;
}[];
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
} & HTMLAttributes<HTMLDivElement>;
