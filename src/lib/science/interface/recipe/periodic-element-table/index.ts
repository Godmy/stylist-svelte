import type { HTMLAttributes } from 'svelte/elements';
import type { PeriodicElement } from '$stylist/science/type/struct/periodic-element';
export interface RecipePeriodicElementTable extends HTMLAttributes<HTMLDivElement> {
elements?: readonly PeriodicElement[];
	selectedSymbol?: string;
	onElementSelect?: (element: PeriodicElement) => void;
}
