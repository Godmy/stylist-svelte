import createMediaIconPickerState from '$stylist/information/function/state/icon-picker/index.svelte';
import type { RecipeThemeIconPicker } from '$stylist/information/interface/recipe/icon-picker';

export const createIconPickerState = (props: RecipeThemeIconPicker) => {
	return createMediaIconPickerState(props);
};

export default createIconPickerState;
