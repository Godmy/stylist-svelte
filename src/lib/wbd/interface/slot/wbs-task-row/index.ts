import type { StructWbdTask } from '$stylist/wbd/type/struct/task';
import type { StructWbdPertResult } from '$stylist/wbd/type/struct/pert-result';

export interface SlotWbsTaskRow {
	task: StructWbdTask;
	depth?: number;
	rollup?: StructWbdPertResult;
	expanded?: boolean;
	hasChildren?: boolean;
	class?: string;
}
