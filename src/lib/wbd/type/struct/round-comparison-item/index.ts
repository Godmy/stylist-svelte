export type StructWbdRoundComparisonItem = {
	questionId: string;
	questionText: string;
	previousMedian?: number;
	currentMedian?: number;
	previousConsensus?: 'high' | 'medium' | 'low';
	currentConsensus?: 'high' | 'medium' | 'low';
};
