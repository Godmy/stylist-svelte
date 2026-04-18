import type { HTMLAttributes } from 'svelte/elements';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotDataTableColumn } from '$stylist/control/interface/slot/data-table-column';

export interface SlotDataTableRecipe<T extends Record<string, unknown>> extends InteractionHTMLAttributes<HTMLDivElement> {
	data: T[];
	columns: SlotDataTableColumn<T>[];
	striped?: boolean;
	hoverable?: boolean;
	maxHeight?: string;
	class?: string;
	onRowClick?: (row: T) => void;
}
