import type { TokenTextControlDefinition } from '$stylist/token/type/object/text-control-definition';

export interface RecipeTokenText {
definition: TokenTextControlDefinition;
	value?: string;
	placeholder?: string;
	onChange?: (value: string) => void;
}
