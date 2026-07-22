import type { RecipeSimpleModal as SimpleModalProps } from '$stylist/navigation/interface/recipe/simple-modal';

export function createSimpleModalState(props: SimpleModalProps) {
	const dialogClasses = $derived(`sm-dialog ${props.class ?? ''}`.trim());

	return {
		get dialogClasses() {
			return dialogClasses;
		}
	};
}

export default createSimpleModalState;
