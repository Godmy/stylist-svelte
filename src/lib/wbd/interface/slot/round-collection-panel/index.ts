import type { StructWbdTask } from '$stylist/wbd/type/struct/task';
import type { StructWbdEstimate } from '$stylist/wbd/type/struct/estimate';

export interface SlotRoundCollectionPanel {
	tasks: StructWbdTask[];
	values?: Record<string, Partial<StructWbdEstimate>>;
	class?: string;
}
