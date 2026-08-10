import type { HTMLInputAttributes } from 'svelte/elements';
import type { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';
import type { SlotRadioOption } from '$stylist/input/interface/slot/radio-option';

export interface RecipeRadioGroup
	extends Omit<HTMLInputAttributes, 'type' | 'value' | 'name' | 'checked'> {
	name: string;
	value?: string;
	options: SlotRadioOption[];
	label?: string;
	description?: string;
	orientation?: (typeof TOKEN_ORIENTATION)[number];
	disabled?: boolean;
	required?: boolean;
	error?: string;
	class?: string;
}
