import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotDataTableColumn } from '$stylist/table/interface/slot/data-table-column';

export interface SlotDataTableRecipe<T extends Record<string, unknown>>
	extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	data: T[];
	columns: SlotDataTableColumn<T>[];
	striped?: boolean;
	hoverable?: boolean;
	maxHeight?: string;
	class?: string;
	onRowClick?: (row: T) => void;
}
