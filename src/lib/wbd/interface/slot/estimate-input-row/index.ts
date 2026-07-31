import type { StructWbdTask } from '$stylist/wbd/type/struct/task';
import type { StructWbdEstimate } from '$stylist/wbd/type/struct/estimate';

export interface SlotEstimateInputRow {
	task: StructWbdTask;
	value?: Partial<StructWbdEstimate>;
	submitted?: boolean;
	class?: string;
}
