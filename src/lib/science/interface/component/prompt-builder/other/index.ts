import type { HtmlAttributesBase } from '$stylist/information/type/struct';

export interface PromptVariable {
	id: string;
	name: string;
	description: string;
	type: 'text' | 'number' | 'boolean' | 'select';
	required?: boolean;
	defaultValue?: string | number | boolean;
	options?: Array<{ value: string; label: string }>;
}

export interface PromptTemplate {
	id: string;
	name: string;
	description: string;
	content: string;
	variables: PromptVariable[];
	tags?: string[];
}

export interface PromptBuilderProps extends HtmlAttributesBase<HTMLDivElement> {
	templates?: PromptTemplate[];
	initialPrompt?: string;
	variables?: PromptVariable[];
	onSave?: (prompt: string, variables: PromptVariable[]) => void;
	onRun?: (prompt: string, variables: Record<string, unknown>) => void;
	showTemplates?: boolean;
	showVariables?: boolean;
	class?: string;
	headerClass?: string;
	editorClass?: string;
	variablesClass?: string;
	footerClass?: string;
}
