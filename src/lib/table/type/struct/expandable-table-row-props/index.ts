import type { Snippet } from 'svelte';
import type { ExpandableTableRowRestProps } from '$stylist/table/type/struct/expandable-table-row-rest-props';

export type ExpandableTableRowProps = ExpandableTableRowRestProps & {
	expandableContent: Snippet;
	rowContent: Snippet;
	isExpanded?: boolean;
	class?: string;
	cellClass?: string;
	headerCellClass?: string;
	onToggle?: (expanded: boolean) => void;
};
