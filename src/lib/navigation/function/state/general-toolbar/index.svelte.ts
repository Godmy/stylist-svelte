import type { GeneralToolbarRecipe } from '$stylist/navigation/type/struct/general-toolbar-props';

function getButtonSizeForToolbar(compact: boolean): 'sm' | 'md' {
	return compact ? 'sm' : 'md';
}

export function createGeneralToolbarState(props: GeneralToolbarRecipe) {
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
