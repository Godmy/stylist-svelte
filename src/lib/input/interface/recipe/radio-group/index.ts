import type { HTMLInputAttributes } from 'svelte/elements';
import type { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';
export interface RecipeRadioGroup
	extends Omit<HTMLInputAttributes, 'type' | 'value' | 'name' | 'checked'> {
	name: string;
	value?: string;
	options: ({
value: string;
	label: string;
	description?: string;
	disabled?: boolean;
})[];
	label?: string;
	description?: string;
	orientation?: (typeof TOKEN_ORIENTATION)[number];
	disabled?: boolean;
	required?: boolean;
	error?: string;
	class?: string;
}
