import type { HTMLInputAttributes } from 'svelte/elements';

export interface RecipeLoginField extends HTMLInputAttributes {
	label: string;
	fieldType?: 'email' | 'password' | 'text';
	fieldError?: string;
}
