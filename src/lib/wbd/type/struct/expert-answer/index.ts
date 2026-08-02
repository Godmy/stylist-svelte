export type StructWbdExpertAnswer = {
	questionId: string;
	optimistic?: number;
	realistic?: number;
	pessimistic?: number;
	rationale?: string;
	confidence?: number;
	submitted?: boolean;
};
