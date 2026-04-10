import type { Snippet } from 'svelte';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TagRecipe } from '$stylist/typography/interface/recipe/tag';

export type TagProps = TagRecipe &
	InteractionHTMLAttributes<HTMLSpanElement> & {
		text?: string;
		icon?: Snippet;
		content?: Snippet;
	};
