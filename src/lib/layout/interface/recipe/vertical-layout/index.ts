import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
export interface RecipeVerticalLayout extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	children?: Snippet;
	gap?: string | number;
	align?: string;
	justify?: string;
	alignItems?: string;
	justifyContent?: string;
	fillHeight?: boolean;
}
