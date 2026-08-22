import type { HTMLAttributes } from 'svelte/elements';
export interface RecipePeriodicElementPropertyGrid extends HTMLAttributes<HTMLDivElement> {
	properties: readonly {
		label: string;
		value?: string | number;
	}[];
}
