export interface SlotPromptVariable {
	id: string;
	name: string;
	description: string;
	type: 'text' | 'number' | 'boolean' | 'select';
	required?: boolean;
	defaultValue?: string | number | boolean;
	options?: Array<{ value: string; label: string }>;
}
