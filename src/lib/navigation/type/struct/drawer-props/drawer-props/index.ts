import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { PopoverPosition } from '$stylist/layout/type/enum/popover-position';

export type DrawerProps = HTMLAttributes<HTMLDivElement> & {
	open?: boolean;
	position?: PopoverPosition;
	size?: string;
	closable?: boolean;
	showBackdrop?: boolean;
	class?: string;
	header?: Snippet;
	actions?: Snippet;
	children?: Snippet;
};
