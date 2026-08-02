export type StructWbdConsensusItem = {
	questionId: string;
	questionText: string;
	category?: string;
	consensusLevel: 'high' | 'medium' | 'low';
	countResponses: number;
	median?: number;
	q1?: number;
	q3?: number;
	minValue?: number;
	maxValue?: number;
	rationaleCount?: number;
};
