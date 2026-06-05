import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ClassProp } from '$stylist/information/type/struct/class-prop';

export interface SlotInputHelperChildren<T extends HTMLElement = HTMLElement>
	extends Omit<HTMLAttributes<T>, 'class'>,
		ClassProp {
	children?: Snippet<[]>;
}
