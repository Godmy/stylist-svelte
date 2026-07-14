import type { RecipeScience } from '$stylist/ai/interface/recipe/science';

export interface SlotPromptTemplate {
	id: string;
	name: string;
	description: string;
	content: string;
	variables: RecipeScience[];
	tags?: string[];
}
