/** Props для hoverable компонента */
import type { IHoverable } from '$stylist/interaction/interface/proto/hoverable';
import type { Snippet } from 'svelte';

export interface HoverProps extends IHoverable {
	class?: string;
	children?: Snippet;
}
