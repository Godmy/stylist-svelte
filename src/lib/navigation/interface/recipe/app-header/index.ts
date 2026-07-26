import type { Snippet } from 'svelte';
import type { AppHeaderNavLink } from '$stylist/navigation/type/object/app-header-nav-link';

export interface RecipeAppHeader {
	class?: string;
	brand: string;
	brandHref?: string;
	navLinks?: AppHeaderNavLink[];
	trailing?: Snippet;
}
