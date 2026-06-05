import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { Snippet } from 'svelte';

export interface SlotLazyLoader extends InteractionHTMLAttributes<HTMLDivElement> {
	loading?: boolean;
	text?: string;
	class?: string;
	children?: Snippet;
}
