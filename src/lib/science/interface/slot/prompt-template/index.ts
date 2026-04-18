import type { HtmlAttributesBase } from '$stylist/information/interface/slot';
import type { RecipeScience } from '$stylist/science/interface/recipe/science';

export interface SlotPromptTemplate {
	id: string;
	name: string;
	description: string;
	content: string;
	variables: RecipeScience[];
	tags?: string[];
}
