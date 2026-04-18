import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotTableRecord } from '$stylist/control/interface/slot/table-record';

export interface SlotTableWithGrouping extends InteractionHTMLAttributes<HTMLDivElement> {
	data: SlotTableRecord[];
	groupBy: string;
	class?: string;
}
