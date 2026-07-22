import type { HTMLAttributes } from 'svelte/elements';
import type { PeriodicElement } from '$stylist/science/type/struct/periodic-element';

export interface SlotPeriodicElementAbsorptionSpectrum extends HTMLAttributes<HTMLDivElement> {
	element?: PeriodicElement;
	minWavelength?: number;
	maxWavelength?: number;
}
