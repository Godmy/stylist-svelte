import type { HTMLAttributes } from 'svelte/elements';
export interface RecipeSeparator extends HTMLAttributes<HTMLHRElement> {
	class?: string;
	orientation?: 'horizontal' | 'vertical';
	decorative?: boolean;
}
