import type { RecipeGeneralToolbar } from '$stylist/navigation/interface/recipe/general-toolbar';

function getButtonSizeForToolbar(compact: boolean): 'sm' | 'md' {
	return compact ? 'sm' : 'md';
}

export function createGeneralToolbarState(props: RecipeGeneralToolbar) {
	const buttonSize = $derived(getButtonSizeForToolbar(props.compact ?? false));

	return {
		get buttonSize() {
			return buttonSize;
		},
		get showButtons() {
			return true;
		}
	};
}

export default createGeneralToolbarState;
