/** Props для animate компонента */
import type { BehaviorAnimate as IAnimate } from '$stylist/animation/interface/behavior/animate';
import type { Snippet } from 'svelte';
import type { BehaviorAnimate } from '$stylist/animation/interface/behavior/animate';

export interface SlotAnimate extends BehaviorAnimate {
	class?: string;
	children?: Snippet;
}
