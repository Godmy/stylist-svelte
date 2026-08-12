import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { GridMoleculeJustify } from '$stylist/layout/type/alias/grid-molecule-justify';
import type { LayoutGravity } from '$stylist/layout/type/alias/item-layout-gravity';
import type { SplitLayoutGap } from '$stylist/layout/type/alias/split-layout-gap';
export interface RecipeGridMolecule extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	children: Snippet;
	cols?: number;
	gap?: SplitLayoutGap;
	responsive?: boolean;
	alignItems?: LayoutGravity;
	justifyContent?: GridMoleculeJustify;
}
