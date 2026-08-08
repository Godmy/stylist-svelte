import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface RecipeAnnouncementBanner extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	title?: string;
	description?: string;
	icon?: string;
	class?: string;
	children?: Snippet;
}
