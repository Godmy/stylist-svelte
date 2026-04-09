import { createIconPickerState as createMediaIconPickerState } from '$stylist/information/function/state';
import type { ThemeIconPickerRecipe } from '$stylist/media/interface/recipe/icon-picker';

export const createIconPickerState = (props: ThemeIconPickerRecipe) => {
	return createMediaIconPickerState(props);
};

export default createIconPickerState;
