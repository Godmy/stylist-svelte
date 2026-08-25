export interface RecipeWorkflowSection {
	id?: string;
	ariaLabel: string;
	eyebrow: string;
	title: string;
	steps: string[];
	imageSrc: string;
	imageAlt: string;
	comparisonTitle: string;
	comparisonColumns: [string, string, string];
	comparisonCriteria: string[];
	comparisonRows: [string, string, string][];
	class?: string;
}
