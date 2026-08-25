export interface RecipeDefinitionSection {
	id?: string;
	ariaLabel: string;
	eyebrow: string;
	text: string;
	body: string;
	paragraphs?: string[];
	imageSrc: string;
	imageAlt: string;
	class?: string;
}
