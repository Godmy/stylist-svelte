import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';
import type { Snippet } from 'svelte';

export type AnimatedExpandableTableRowProps = {
	expanded?: boolean;
	expandable?: boolean;
	expandIcon?: string;
	collapseIcon?: string;
	colspan?: number;
	children: Snippet;
	details: Snippet;
} & ArchitectureHTMLAttributes<HTMLTableRowElement>;
