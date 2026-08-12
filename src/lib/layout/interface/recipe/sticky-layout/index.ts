import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
export interface RecipeStickyLayout extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	children: Snippet;
	header?: Snippet;
	footer?: Snippet;
	fillHeight?: boolean;
	headerShadow?: boolean;
	footerShadow?: boolean;
}
