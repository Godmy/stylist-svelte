import createMediaIconPickerState from '$stylist/information/function/state/icon-picker/index.svelte';
import type { ThemeIconPickerRecipe } from '$stylist/media/interface/recipe/icon-picker';

export const createIconPickerState = (props: ThemeIconPickerRecipe) => {
	return createMediaIconPickerState(props);
};

export default createIconPickerState;
