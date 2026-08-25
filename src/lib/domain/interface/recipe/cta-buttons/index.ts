import type { HTMLAttributes } from 'svelte/elements';
export interface RecipeCtaButtons extends HTMLAttributes<HTMLDivElement> {
	totalComponents?: number;
	componentsHref?: string;
	playgroundHref?: string;
	componentsTitle?: string;
	componentsDescriptionPrefix?: string;
	playgroundTitle?: string;
	playgroundDescription?: string;
	onComponentsOpen?: () => void;
	onPlaygroundOpen?: () => void;
	class?: string;
}
