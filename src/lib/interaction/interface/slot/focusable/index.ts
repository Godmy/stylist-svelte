/** Props для focusable компонента */
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { Snippet } from 'svelte';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';

export interface SlotFocusable extends BehaviorFocusable {
	class?: string;
	children?: Snippet;
}
