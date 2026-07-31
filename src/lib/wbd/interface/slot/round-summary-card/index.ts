import type { StructWbdTask } from '$stylist/wbd/type/struct/task';
import type { StructWbdRoundSummary } from '$stylist/wbd/type/struct/round-summary';

export interface SlotRoundSummaryCard {
	task: StructWbdTask;
	summary: StructWbdRoundSummary;
	class?: string;
}
