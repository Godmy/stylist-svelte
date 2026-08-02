export type StructWbdRoundSnapshot = {
	id: string;
	sessionId: string;
	roundNumber: number;
	questionId: string;
	countResponses: number;
	median?: number;
	q1?: number;
	q3?: number;
	minValue?: number;
	maxValue?: number;
	consensusLevel?: 'high' | 'medium' | 'low';
	createdAt?: string;
};
