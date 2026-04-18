import type { HTMLAttributes, HTMLButtonAttributes, HTMLInputAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot';
import type { TokenOrientation } from '$stylist/layout/type/enum/orientation';
import type { TokenSelectionType } from '$stylist/control/type/record/selection-type';
import type { RecipeToggleInputProps as RecipeToggleInputProps } from '$stylist/control/interface/recipe/toggle-input-props';

export interface SlotCheckbox extends RecipeToggleInputProps {
	id?: string;
	label?: string;
	description?: string;
	errors?: string[];
	required?: boolean;
	indeterminate?: boolean;
}
