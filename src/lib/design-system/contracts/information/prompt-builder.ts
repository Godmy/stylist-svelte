import type { HtmlAttributesBase } from './common';

import type { PromptTemplate, PromptVariable } from '../../types/information/prompt-builder';
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



