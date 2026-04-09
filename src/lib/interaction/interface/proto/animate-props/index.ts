/** Props для animate компонента */
import type { IAnimate } from '$stylist/interaction/interface/proto/animate';
import type { Snippet } from 'svelte';

export interface AnimateProps extends IAnimate {
	class?: string;
	children?: Snippet;
}
