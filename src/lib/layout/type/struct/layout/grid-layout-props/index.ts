import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { GridLayoutItem } from '$stylist/layout/type/struct/layout/grid-layout-item';

export type GridLayoutProps = LayoutHTMLAttributes<HTMLDivElement> & {
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
	items?: GridLayoutItem[];
};
