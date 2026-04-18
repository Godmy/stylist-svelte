import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { PopoverPosition } from '$stylist/layout/type/enum/popover-position';
import type { Snippet } from 'svelte';

export interface PopoverProps extends StructIntersectAll<[]> {
	title?: string;
	content: Snippet;
	trigger: Snippet;
	open?: boolean;
	position?: PopoverPosition;
	class?: string;
	id?: string;
}
