export type StructWbdConsensusMatrixCell = {
	questionId: string;
	questionText: string;
	roundNumber: number;
	consensusLevel: 'high' | 'medium' | 'low';
};
