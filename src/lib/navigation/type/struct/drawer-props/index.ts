import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';

export interface DrawerProps extends ThemeAttributes<HTMLDivElement> {
	open?: boolean;
	position?: DrawerPosition;
	size?: string;
	closable?: boolean;
	showBackdrop?: boolean;
	class?: string;
	header?: Snippet;
	actions?: Snippet;
	children?: Snippet;
}
