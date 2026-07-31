import type { StructWbdTask } from '$stylist/wbd/type/struct/task';
import type { StructWbdPertResult } from '$stylist/wbd/type/struct/pert-result';

export interface SlotEstimateRangeChart {
	tasks: StructWbdTask[];
	results: Record<string, StructWbdPertResult>;
	unit?: string;
	class?: string;
}
