import type { StructWbdConsensusMatrixCell } from '$stylist/wbd/type/struct/consensus-matrix-cell';

export interface SlotWbdQuestionConsensusMatrix {
	cells: StructWbdConsensusMatrixCell[];
	rounds: number[];
	class?: string;
}
