import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { SlotGridLayoutItem } from '$stylist/layout/interface/slot/grid-layout-item';

export interface GridLayoutProps extends LayoutHTMLAttributes<HTMLDivElement> {
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
	items?: SlotGridLayoutItem[];
}
