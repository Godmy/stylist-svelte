import type { HTMLInputAttributes } from 'svelte/elements';

export type RadioOption = {
	value: string;
	label: string;
	description?: string;
	disabled?: boolean;
};

export type RadioOrientation = 'vertical' | 'horizontal';

export interface RadioGroupProps extends Omit<HTMLInputAttributes, 'type' | 'value' | 'name' | 'checked'> {
	name: string;
	value?: string;
	options: RadioOption[];
	label?: string;
	description?: string;
	orientation?: RadioOrientation;
	disabled?: boolean;
	required?: boolean;
	error?: string;
	class?: string;
}
