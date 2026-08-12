import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { TOKEN_ALIGNMENT } from '$stylist/layout/const/array/alignment';
export type DrawerProps = HTMLAttributes<HTMLDivElement> & {
	open?: boolean;
	position?: (typeof TOKEN_ALIGNMENT)[number];
	size?: string;
	closable?: boolean;
	showBackdrop?: boolean;
	class?: string;
	header?: Snippet;
	actions?: Snippet;
	children?: Snippet;
};
