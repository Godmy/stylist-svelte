import type { Snippet } from 'svelte';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { TagRecipe } from '$stylist/control/interface/recipe/tag';

export type TagProps = TagRecipe &
	InteractionHTMLAttributes<HTMLSpanElement> & {
		text?: string;
		icon?: Snippet;
		content?: Snippet;
	};
