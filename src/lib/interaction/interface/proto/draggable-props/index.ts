/** Props для draggable компонента */
import type { IDraggable } from '$stylist/interaction/interface/proto/draggable';
import type { Snippet } from 'svelte';

export interface DragProps extends IDraggable {
	showHandle?: boolean;
	class?: string;
	children?: Snippet;
}
