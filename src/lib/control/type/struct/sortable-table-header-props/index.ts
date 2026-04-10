import type { HTMLAttributes } from 'svelte/elements';
import type { SortableTableHeaderProps as SortableTableHeaderComponentProps } from '$stylist/control/interface/component/sortable-table-header/other';

export type SortableTableHeaderProps = SortableTableHeaderComponentProps &
	HTMLAttributes<HTMLTableHeaderCellElement>;
