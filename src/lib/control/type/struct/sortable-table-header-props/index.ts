import type { HTMLAttributes } from 'svelte/elements';
import type { SlotSortableTableHeader as SortableTableHeaderComponentProps } from '$stylist/control/interface/slot/sortable-table-header';

export type SortableTableHeaderProps = SortableTableHeaderComponentProps &
	HTMLAttributes<HTMLTableHeaderCellElement>;
