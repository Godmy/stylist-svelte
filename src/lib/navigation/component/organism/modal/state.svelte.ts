import type { RecipeModal } from '$stylist/navigation/interface/recipe/modal';

export function createModalState(props: RecipeModal) {
	const dialogClasses = $derived(`nav-dialog ${props.class ?? ''}`.trim());

	return {
		get dialogClasses() {
			return dialogClasses;
		}
	};
}

export default createModalState;
