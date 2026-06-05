import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotTableRecord } from '$stylist/control/interface/slot/table-record';

export interface SlotTableWithFilters extends InteractionHTMLAttributes<HTMLDivElement> {
	data: SlotTableRecord[];
	columns: string[];
	class?: string;
}
