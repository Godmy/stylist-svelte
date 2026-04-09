/** Props для focusable компонента */
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { Snippet } from 'svelte';

export interface FocusProps extends IFocusable {
	class?: string;
	children?: Snippet;
}
