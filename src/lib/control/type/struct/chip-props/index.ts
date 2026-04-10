import type { Snippet } from 'svelte';
import type { ChipRecipe } from '$stylist/typography/interface/recipe/chip';

export type ChipProps = ChipRecipe & {
	text?: string;
	icon?: Snippet;
	content?: Snippet;
};
