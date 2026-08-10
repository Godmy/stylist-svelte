import type { HTMLAttributes } from 'svelte/elements';
import type { PeriodicElement } from '$stylist/science/type/struct/periodic-element';
export interface RecipePeriodicElementDetailCard extends HTMLAttributes<HTMLDivElement> {
element?: PeriodicElement;
}
