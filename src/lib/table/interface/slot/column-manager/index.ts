import type { HTMLAttributes } from 'svelte/elements';
import type { SlotColumnConfig } from '$stylist/table/interface/slot/column-config';

export interface SlotColumnManager extends HTMLAttributes<HTMLDivElement> {
	columns: SlotColumnConfig[];
	onColumnsChange?: (columns: SlotColumnConfig[]) => void;
	class?: string;
}
