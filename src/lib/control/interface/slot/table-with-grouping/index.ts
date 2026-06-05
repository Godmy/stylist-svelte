import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotTableRecord } from '$stylist/control/interface/slot/table-record';

export interface SlotTableWithGrouping extends InteractionHTMLAttributes<HTMLDivElement> {
	data: SlotTableRecord[];
	groupBy: string;
	class?: string;
}
