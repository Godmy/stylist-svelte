import type { RecipePageEllipsis } from '$stylist/navigation/interface/recipe/page-ellipsis';

export function createPageEllipsisState(props: RecipePageEllipsis) {
	const containerClasses = $derived(`page-ellipsis ${props.class ?? ''}`.trim());

	return {
		get containerClasses() {
			return containerClasses;
		}
	};
}

export default createPageEllipsisState;
