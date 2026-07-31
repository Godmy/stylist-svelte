import type { StructWbdTask } from '$stylist/wbd/type/struct/task';
import type { StructWbdPertResult } from '$stylist/wbd/type/struct/pert-result';

export interface SlotWbsTree {
	tasks: StructWbdTask[];
	rollups?: Record<string, StructWbdPertResult>;
	class?: string;
}
