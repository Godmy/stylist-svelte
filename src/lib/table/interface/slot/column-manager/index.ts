import type { SlotColumnConfig } from '$stylist/table/interface/slot/column-config';

export interface SlotColumnManager {
	columns: SlotColumnConfig[];
	onColumnsChange?: (columns: SlotColumnConfig[]) => void;
	class?: string;
}
