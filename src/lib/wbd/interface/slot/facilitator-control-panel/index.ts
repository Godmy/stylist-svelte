import type { StructWbdRound } from '$stylist/wbd/type/struct/round';

export interface SlotFacilitatorControlPanel {
	round: StructWbdRound;
	pendingCount?: number;
	totalCount?: number;
	class?: string;
}
