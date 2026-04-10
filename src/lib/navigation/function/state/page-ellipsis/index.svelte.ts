import type { PageEllipsisRecipe } from '$stylist/navigation/interface/recipe/page-ellipsis';

export function createPageEllipsisState(props: PageEllipsisRecipe) {
	const containerClasses = $derived(`flex items-center px-3 py-2 text-sm font-medium text-[var(--color-text-primary)] ${props.class ?? ''}`);

	return {
		get containerClasses() {
			return containerClasses;
		}
	};
}
 
 
export default createPageEllipsisState; 
