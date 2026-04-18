/** Props для hoverable компонента */
import type { BehaviorHoverable as IHoverable } from '$stylist/interaction/interface/behavior/hoverable';
import type { Snippet } from 'svelte';
import type { BehaviorHoverable } from '$stylist/interaction/interface/behavior/hoverable';

export interface SlotHoverable extends BehaviorHoverable {
	class?: string;
	children?: Snippet;
}
