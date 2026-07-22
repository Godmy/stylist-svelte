import type { HTMLAttributes } from 'svelte/elements';
import type { PeriodicElement } from '$stylist/science/type/struct/periodic-element';

export interface SlotPeriodicElement extends HTMLAttributes<HTMLButtonElement> {
	element: PeriodicElement;
	selected?: boolean;
	highlighted?: boolean;
	dimmed?: boolean;
	onSelect?: (element: PeriodicElement) => void;
}
