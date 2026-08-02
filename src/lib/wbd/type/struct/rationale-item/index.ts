export type StructWbdRationaleItem = {
	id: string;
	questionId: string;
	questionText?: string;
	roundNumber: number;
	rationale: string;
	confidence?: number;
	consensusLevel?: 'high' | 'medium' | 'low';
};
