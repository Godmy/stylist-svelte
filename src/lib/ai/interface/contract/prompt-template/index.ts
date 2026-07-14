import type { ContractPromptVariable } from '$stylist/ai/interface/contract/prompt-variable';

export interface ContractPromptTemplate {
	id: string;
	name: string;
	description: string;
	content: string;
	variables: ContractPromptVariable[];
	tags?: string[];
}
