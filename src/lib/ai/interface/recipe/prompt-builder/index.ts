import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ContractPromptVariable } from '$stylist/ai/interface/contract/prompt-variable';
import type { ContractPromptTemplate } from '$stylist/ai/interface/contract/prompt-template';

export interface RecipePromptBuilder extends ComputeIntersectAll<[SlotChildren]> {
	templates?: ContractPromptTemplate[];
	initialPrompt?: string;
	variables?: ContractPromptVariable[];
	onSave?: (prompt: string, variables: ContractPromptVariable[]) => void;
	onRun?: (prompt: string, variables: Record<string, unknown>) => void;
	showTemplates?: boolean;
	showVariables?: boolean;
	class?: string;
	headerClass?: string;
	editorClass?: string;
	variablesClass?: string;
	footerClass?: string;
}
