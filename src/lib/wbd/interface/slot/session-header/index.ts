import type { StructWbdRound } from '$stylist/wbd/type/struct/round';

export interface SlotSessionHeader {
	title: string;
	rounds: StructWbdRound[];
	currentRoundId?: string;
	class?: string;
}
