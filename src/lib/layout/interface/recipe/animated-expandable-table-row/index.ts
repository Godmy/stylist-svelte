import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
export interface RecipeAnimatedExpandableTableRow
	extends LayoutHTMLAttributes<HTMLTableRowElement> {
	expanded?: boolean;
	expandable?: boolean;
	expandIcon?: string;
	collapseIcon?: string;
	colspan?: number;
	children: Snippet;
	details: Snippet;
}
