export type StructWbdQuestion = {
	id: string;
	sessionId?: string;
	orderIndex: number;
	category?: string;
	text: string;
	type: 'numeric' | 'percentage' | 'boolean';
	unit?: string;
	minValue?: number;
	maxValue?: number;
	required?: boolean;
};
