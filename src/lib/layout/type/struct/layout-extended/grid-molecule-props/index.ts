import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { LayoutGravity } from '$stylist/layout/type/alias/item-layout-gravity';
import type { SplitLayoutGap } from '$stylist/layout/type/alias/split-layout-gap';
import type { GridMoleculeJustify } from '$stylist/layout/type/alias/grid-molecule-justify';

export type GridMoleculeProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children: Snippet;
	cols?: number;
	gap?: SplitLayoutGap;
	responsive?: boolean;
	alignItems?: LayoutGravity;
	justifyContent?: GridMoleculeJustify;
};

