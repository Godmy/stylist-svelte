import type { HTMLInputAttributes } from 'svelte/elements';
import type { RadioOption } from '../radiooption';
import type { SplitLayoutDirection } from '$stylist/layout/type/enum/split-layout-direction';

export type RadioGroupProps = Omit<HTMLInputAttributes, 'type' | 'value' | 'name' | 'checked'> & {
	name: string;
	value?: string;
	options: RadioOption[];
	label?: string;
	description?: string;
	orientation?: SplitLayoutDirection;
	disabled?: boolean;
	required?: boolean;
	error?: string;
	class?: string;
};
