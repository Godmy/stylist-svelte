import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeImageWithCaption extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	src?: string;
	alt?: string;
	caption?: string;
	width?: string;
	height?: string;
	imageClass?: string;
	captionClass?: string;
	rounded?: boolean;
	bordered?: boolean;
	shadow?: boolean;
	loading?: 'lazy' | 'eager';
	class?: string;
}
