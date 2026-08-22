import type { HTMLAttributes } from 'svelte/elements';
import type { PeriodicElementLightInteraction } from '$stylist/science/type/object/periodic-element-light-interaction';
export interface RecipePeriodicElementLightInteraction extends HTMLAttributes<HTMLElement> {
	interaction: PeriodicElementLightInteraction;
}
