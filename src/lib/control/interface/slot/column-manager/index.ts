import type { HTMLAttributes } from 'svelte/elements';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotColumnConfig } from '$stylist/control/interface/slot/column-config';

export interface SlotColumnManager extends InteractionHTMLAttributes<HTMLDivElement> {
	columns: SlotColumnConfig[];
	onColumnsChange?: (columns: SlotColumnConfig[]) => void;
	class?: string;
}
