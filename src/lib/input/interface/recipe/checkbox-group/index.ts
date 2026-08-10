import type { HTMLAttributes } from 'svelte/elements';
import type { SlotCheckboxGroupOption } from '$stylist/input/interface/slot/checkbox-group-option';

export interface RecipeCheckboxGroup extends Omit<HTMLAttributes<HTMLFieldSetElement>, 'class'> {
	options: SlotCheckboxGroupOption[];
	value?: string[];
	label?: string;
	description?: string;
	class?: string;
	itemClass?: string;
	disabled?: boolean;
	required?: boolean;
	name?: string;
	onValueInput?: (values: string[]) => void;
	onValueChange?: (values: string[]) => void;
	onInput?: (values: string[]) => void;
	onChange?: (values: string[]) => void;
}
