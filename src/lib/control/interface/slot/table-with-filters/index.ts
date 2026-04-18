import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotTableRecord } from '$stylist/control/interface/slot/table-record';

export interface SlotTableWithFilters extends InteractionHTMLAttributes<HTMLDivElement> {
	data: SlotTableRecord[];
	columns: string[];
	class?: string;
}
