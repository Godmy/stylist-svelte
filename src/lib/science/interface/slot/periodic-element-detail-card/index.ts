import type { HTMLAttributes } from 'svelte/elements';
import type { PeriodicElement } from '$stylist/science/type/struct/periodic-element';

export interface SlotPeriodicElementDetailCard extends HTMLAttributes<HTMLDivElement> {
	element?: PeriodicElement;
}
