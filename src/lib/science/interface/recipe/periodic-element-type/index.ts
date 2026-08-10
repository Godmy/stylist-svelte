import type { HTMLAttributes } from 'svelte/elements';
export interface RecipePeriodicElementType extends HTMLAttributes<HTMLButtonElement> {
category: string;
	selected?: boolean;
	accent?: string;
	onSelect?: (category: string) => void;
}
