import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotTableRecord } from '$stylist/table/interface/slot/table-record';

export interface SlotTableWithFilters extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	data: SlotTableRecord[];
	columns: string[];
	class?: string;
}
