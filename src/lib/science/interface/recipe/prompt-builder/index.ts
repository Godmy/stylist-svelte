import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { ScienceHTMLAttributes } from '$stylist/science/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/science/interface/slot';
import type { Snippet } from 'svelte';
import type { ContractPromptVariable } from '$stylist/science/interface/contract/prompt-variable';
import type { ContractPromptTemplate } from '$stylist/science/interface/contract/prompt-template';

export interface RecipePromptBuilder extends StructIntersectAll<[]> {
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
	footerClass?: string;	children?: Snippet;
}
