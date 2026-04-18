/** Props для draggable компонента */
import type { BehaviorDraggable as IDraggable } from '$stylist/interaction/interface/behavior/draggable';
import type { Snippet } from 'svelte';
import type { BehaviorDraggable } from '$stylist/interaction/interface/behavior/draggable';

export interface SlotDraggable extends BehaviorDraggable {
	class?: string;
	children?: Snippet;
}
