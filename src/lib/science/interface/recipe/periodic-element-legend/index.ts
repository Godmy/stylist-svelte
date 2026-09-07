import type { HTMLAttributes } from 'svelte/elements';
export interface RecipePeriodicElementLegend extends HTMLAttributes<HTMLDivElement> {
	categories: readonly string[];
	selectedCategory?: string;
	onCategorySelect?: (category: string) => void;
}
