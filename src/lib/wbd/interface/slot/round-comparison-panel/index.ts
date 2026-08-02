import type { StructWbdRoundComparisonItem } from '$stylist/wbd/type/struct/round-comparison-item';

export interface SlotWbdRoundComparisonPanel {
	items: StructWbdRoundComparisonItem[];
	previousRound: number;
	currentRound: number;
	class?: string;
}
