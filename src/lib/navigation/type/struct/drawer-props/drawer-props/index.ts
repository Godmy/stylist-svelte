import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { DrawerPosition } from '../drawerposition';

export type DrawerProps = ThemeAttributes<HTMLDivElement> & {
	open?: boolean;
	position?: DrawerPosition;
	size?: string;
	closable?: boolean;
	showBackdrop?: boolean;
	class?: string;
	header?: Snippet;
	actions?: Snippet;
	children?: Snippet;
};
