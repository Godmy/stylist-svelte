import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item';

export type GridLayoutItem = {
	class?: string;
	colSpan?: number;
	rowSpan?: number;
	content: string | Snippet;
};

export type GridLayoutProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children?: Snippet;
	columns?: number | string;
	cols?: number | string;
	rows?: number | string;
	gap?: string;
	responsive?: boolean;
	alignItems?: string;
	justifyContent?: string;
	itemClass?: string;
	items?: GridLayoutItem[];
};
