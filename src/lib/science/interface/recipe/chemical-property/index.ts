import type { HTMLAttributes } from 'svelte/elements';
export interface RecipeChemicalProperty extends HTMLAttributes<HTMLDivElement> {
chemicalProperty: ({
	label: string;
	value?: string | number;
});
}
