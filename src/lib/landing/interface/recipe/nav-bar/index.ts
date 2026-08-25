import type { Snippet } from 'svelte';
import type { NavBarLink } from '$stylist/landing/type/object/nav-bar-link';
export interface RecipeNavBar {
	ariaLabel: string;
	sectionLinks: NavBarLink[];
	signInHref: string;
	signInLabel: string;
	brand?: Snippet;
	languageControl?: Snippet;
	onMobileMenuOpen?: () => void;
	mobileMenuOpen?: boolean;
	class?: string;
}
