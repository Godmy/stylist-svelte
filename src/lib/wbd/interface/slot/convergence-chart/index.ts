import type { StructWbdRoundSummary } from '$stylist/wbd/type/struct/round-summary';

export interface SlotConvergenceChart {
	taskLabel: string;
	roundSummaries: StructWbdRoundSummary[];
	class?: string;
}
