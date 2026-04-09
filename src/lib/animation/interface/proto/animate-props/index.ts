/** Props для animate компонента */
import type { IAnimate } from '$stylist/animation/interface/proto/animate';
import type { Snippet } from 'svelte';

export interface AnimateProps extends IAnimate {
	class?: string;
	children?: Snippet;
}
