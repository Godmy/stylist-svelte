import type { HtmlAttributesBase } from '$stylist/information/interface/slot';
import type { RecipeScience } from '$stylist/science/interface/recipe/science';

export interface SlotPromptBuilder extends HtmlAttributesBase<HTMLDivElement> {
	templates?: RecipeScience[];
	initialPrompt?: string;
	variables?: RecipeScience[];
	onSave?: (prompt: string, variables: RecipeScience[]) => void;
	onRun?: (prompt: string, variables: Record<string, unknown>) => void;
	showTemplates?: boolean;
	showVariables?: boolean;
	class?: string;
	headerClass?: string;
	editorClass?: string;
	variablesClass?: string;
	footerClass?: string;
}
