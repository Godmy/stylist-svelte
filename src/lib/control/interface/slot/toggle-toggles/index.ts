import type { TokenSize } from '$stylist/layout/type/alias/size';
import type { RecipeToggleInputProps as RecipeToggleInputProps } from '$stylist/control/interface/recipe/toggle-input-props';

export interface SlotToggle extends RecipeToggleInputProps {
	toggleSize?: TokenSize;
}
