import type { GeneralToolbarRecipe } from '$stylist/navigation/type/struct/general-toolbar-props';
import { getButtonSizeForToolbar } from '$stylist/navigation/const/record/general-toolbar-dispatch-events';

export function createGeneralToolbarState(props: GeneralToolbarRecipe) {
	const buttonSize = $derived(getButtonSizeForToolbar(props.compact ?? false));

	return {
		get buttonSize() {
			return buttonSize;
		},
		get showButtons() {
			ret