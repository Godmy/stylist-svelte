import type { Snippet } from 'svelte';
import type { NavBarLink } from '$stylist/landing/type/object/nav-bar-link';
export interface RecipeMobileNavigationDrawer {
	ariaLabel: string;
	open: boolean;
	links: NavBarLink[];
	brand?: Snippet;
	onClose?: () => void;
	class?: string;
}
