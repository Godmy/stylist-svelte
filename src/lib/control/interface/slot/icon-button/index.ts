import type { Snippet } from 'svelte';
import type { Props } from '$stylist/information/type/struct/props';
import type { SlotButtonDom } from '$stylist/control/interface/slot/button-dom';

export interface SlotIconButton extends Omit<Props, 'children' | 'icon'>, SlotButtonDom {
	class?: string;
	icon?: string | Snippet;
	children?: Snippet;
}
