import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { SlotClass } from '$stylist/theme/interface/slot/class';

export interface SlotInputHelperChildren<T extends HTMLElement = HTMLElement>
	extends Omit<HTMLAttributes<T>, 'class'>,
		SlotClass {
	children?: Snippet<[]>;
}
