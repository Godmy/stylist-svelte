/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';

export type RowExpandableProps = Omit<LayoutHTMLAttributes<HTMLTableRowElement>, 'class'> & {
	expandableContent: Snippet;
	rowContent: Snippet;
	isExpanded?: boolean;
	class?: string;
	cellClass?: string;
	headerCellClass?: string;
	onToggle?: (expanded: boolean) => void;
};
