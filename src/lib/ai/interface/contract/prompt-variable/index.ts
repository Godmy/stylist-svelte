import type { PromptVariableType } from '$stylist/ai/type/alias/prompt-variable-type';

export interface ContractPromptVariable {
	id: string;
	name: string;
	description: string;
	type: PromptVariableType;
	required?: boolean;
	defaultValue?: string | number | boolean;
	options?: Array<{ value: string; label: string }>;
}

