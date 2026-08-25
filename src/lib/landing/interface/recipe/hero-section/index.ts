import type { Snippet } from 'svelte';
import type { NavBarLink } from '$stylist/landing/type/object/nav-bar-link';
export interface RecipeHeroSection {
	navAriaLabel: string;
	sectionLinks: NavBarLink[];
	signInHref: string;
	signInLabel: string;
	title: string;
	lead: string;
	imageSrc: string;
	imageAlt: string;
	brand?: Snippet;
	languageControl?: Snippet;
	class?: string;
}
