import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { LayoutGravity } from '$stylist/token/type/alias/item-layout-gravity';
import type { SplitLayoutGap } from '$stylist/token/type/alias/split-layout-gap';
import type { GridMoleculeJustify } from '$stylist/token/type/alias/grid-molecule-justify';

export type GridMoleculeProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children: Snippet;
	cols?: number;
	gap?: SplitLayoutGap;
	responsive?: boolean;
	alignItems?: LayoutGravity;
	justifyContent?: GridMoleculeJustify;
};

