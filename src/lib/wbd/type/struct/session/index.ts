export type StructWbdSession = {
	id: string;
	title: string;
	description?: string;
	assumptions?: string;
	status: 'draft' | 'active' | 'round_1' | 'round_2' | 'round_3' | 'completed';
	currentRound: number;
	maxRounds: number;
	expertCount?: number;
	questionCount?: number;
	responseCount?: number;
	createdAt?: string;
	startedAt?: string;
	completedAt?: string;
};
