import type { Snippet } from 'svelte';
import type { Props } from '$stylist/information/type/struct/props';
import type { SlotButtonDom } from '$stylist/control/interface/slot/button-dom';

export interface SlotPageButton
	extends Omit<Props, 'children' | 'page' | 'isActive'>,
		SlotButtonDom {
	class?: string;
	page?: number;
	isActive?: boolean;
	children?: Snippet;
}
