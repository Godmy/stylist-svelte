import type { HTMLAttributes } from 'svelte/elements';
import type { ClassProp } from '$stylist/information/type/struct/class-prop';
import type { ContentProp } from '$stylist/information/type/struct/content-prop';

export interface SlotInputHelper<T extends HTMLElement = HTMLElement>
	extends Omit<HTMLAttributes<T>, 'class'>,
		ClassProp,
		ContentProp {}
