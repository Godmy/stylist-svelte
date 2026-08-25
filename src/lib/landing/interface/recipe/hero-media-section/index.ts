export interface RecipeHeroMediaSection {
	eyebrow?: string;
	title: string;
	lead?: string;
	level?: 1 | 2 | 3;
	imageSrc: string;
	imageAlt: string;
	imageLoading?: 'eager' | 'lazy';
	class?: string;
}
