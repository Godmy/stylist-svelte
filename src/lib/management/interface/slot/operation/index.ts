export interface Operation {
	id: string;
	name: string;
	query: string;
	timestamp: Date;
	status: 'success' | 'error' | 'pending';
	executionTime?: number;
}
