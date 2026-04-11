import type { HTMLInputAttributes } from 'svelte/elements';
import type { RadioOption } from '../radiooption';
import type { RadioOrientation } from '../radioorientation';

export type RadioGroupProps = Omit<HTMLInputAttributes, 'type' | 'value' | 'name' | 'checked'> & {
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
};
