import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotColumnConfig } from '$stylist/table/interface/slot/column-config';

export interface SlotColumnManager extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	columns: SlotColumnConfig[];
	onColumnsChange?: (columns: SlotColumnConfig[]) => void;
	class?: string;
}
