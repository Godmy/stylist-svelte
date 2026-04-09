import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { GridMoleculeAlign, GridMoleculeGap, GridMoleculeJustify } from '$stylist/layout/class/style-manager/grid-molecule';

export type GridMoleculeProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children: Snippet;
	cols?: number;
	gap?: GridMoleculeGap;
	responsive?: boolean;
	alignItems?: GridMoleculeAlign;
	justifyContent?: GridMoleculeJustify;
};
