import type { StructWbdTask } from '$stylist/wbd/type/struct/task';
import type { StructWbdPertResult } from '$stylist/wbd/type/struct/pert-result';

export interface SlotFinalEstimateReport {
	tasks: StructWbdTask[];
	results: Record<string, StructWbdPertResult>;
	class?: string;
}
