import type { HTMLAttributes } from 'svelte/elements';
import type { PeriodicElement } from '$stylist/science/type/struct/periodic-element';

export interface SlotPeriodicElementTable extends HTMLAttributes<HTMLDivElement> {
	elements?: readonly PeriodicElement[];
	selectedSymbol?: string;
	onElementSelect?: (element: PeriodicElement) => void;
}
