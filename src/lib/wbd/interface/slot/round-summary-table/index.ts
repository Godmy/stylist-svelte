import type { StructWbdTask } from '$stylist/wbd/type/struct/task';
import type { StructWbdRoundSummary } from '$stylist/wbd/type/struct/round-summary';

export interface SlotRoundSummaryTable {
	tasks: StructWbdTask[];
	summaries: StructWbdRoundSummary[];
	class?: string;
}
