import type { HTMLAttributes } from 'svelte/elements';
import type { PeriodicElementLightInteraction } from '$stylist/science/type/struct/periodic-element-light-interaction';

export interface SlotPeriodicElementLightInteraction extends HTMLAttributes<HTMLElement> {
	interaction: PeriodicElementLightInteraction;
}
