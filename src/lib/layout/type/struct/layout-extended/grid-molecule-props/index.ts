import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { LayoutGravity } from '$stylist/layout/type/struct/item-layout-gravity';
import type { SplitLayoutGap } from '$stylist/layout/type/enum/split-layout-gap';
import type { GridMoleculeJustify } from '$stylist/layout/type/enum/grid-molecule-justify';

export type GridMoleculeProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children: Snippet;
	cols?: number;
	gap?: SplitLayoutGap;
	responsive?: boolean;
	alignItems?: LayoutGravity;
	justifyContent?: GridMoleculeJustify;
};
