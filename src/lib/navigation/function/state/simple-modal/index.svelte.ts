import type { RecipeSimpleModal as SimpleModalProps } from '$stylist/navigation/interface/recipe/simple-modal';

export function createSimpleModalState(props: SimpleModalProps) {
	const dialogClasses = $derived(
		`bg-[var(--color-background-primary)] rounded-lg p-5 w-full max-w-sm ${props.class ?? ''}`
	);

	return {
		get dialogClasses() {
			return dialogClasses;
		}
	};
}

export default createSimpleModalState;
