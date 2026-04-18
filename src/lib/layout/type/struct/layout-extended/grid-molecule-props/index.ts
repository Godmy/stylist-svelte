import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { GridMoleculeAlign } from '$stylist/layout/type/enum/grid-molecule-align';
import type { GridMoleculeGap } from '$stylist/layout/type/enum/grid-molecule-gap';
import type { GridMoleculeJustify } from '$stylist/layout/type/enum/grid-molecule-justify';

export type GridMoleculeProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children: Snippet;
	cols?: number;
	gap?: GridMoleculeGap;
	responsive?: boolean;
	alignItems?: GridMoleculeAlign;
	justifyContent?: GridMoleculeJustify;
};
