import type { Snippet } from 'svelte';

export type AdminNavItem = { id: string; label: string; href: string; active?: boolean };

export interface RecipeAdminShell {
	brand?: string;
	navItems: AdminNavItem[];
	children: Snippet;
	class?: string;
}
