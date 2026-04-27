import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { Snippet } from 'svelte';

export interface RecipePlaygroundShellHeader extends StructIntersectAll<[Omit<InformationHTMLAttributes<HTMLElement>, 'class'>]> {
	/** Header title */
	title?: string;
	/** Show navigation */
	showNavigation?: boolean;
	/** Show search */
	showSearch?: boolean;
	/** Show theme toggle */
	showThemeToggle?: boolean;
	/** Show user menu */
	showUserMenu?: boolean;
	/** Navigation items */
	navItems?: Array<{ label: string; href: string; active?: boolean }>;
	/** Additional CSS class */
	class?: string;
}
