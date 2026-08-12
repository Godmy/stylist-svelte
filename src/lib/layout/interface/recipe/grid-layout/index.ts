import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
export interface RecipeGridLayout extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	children?: Snippet;
	columns?: number;
	cols?: number;
	rows?: number;
	gap?: string;
	responsive?: boolean;
	alignItems?: string;
	justifyContent?: string;
	itemClass?: string;
	items?: ({
class?: string;
	colSpan?: number;
	rowSpan?: number;
	content: string | Snippet;
})[];
}
