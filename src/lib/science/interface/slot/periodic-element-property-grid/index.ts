import type { HTMLAttributes } from 'svelte/elements';
import type { ChemicalProperty } from '$stylist/science/type/struct/chemical-property';

export interface SlotPeriodicElementPropertyGrid extends HTMLAttributes<HTMLDivElement> {
	properties: readonly ChemicalProperty[];
}
