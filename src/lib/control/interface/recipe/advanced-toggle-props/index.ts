import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { HTMLAttributes, HTMLButtonAttributes, HTMLInputAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot';
import type { TokenOrientation } from '$stylist/layout/type/enum/orientation';
import type { TokenSelectionType } from '$stylist/control/type/record/selection-type';
import type { RecipeToggleBaseProps } from '$stylist/control/interface/recipe/toggle-base-props';

export interface RecipeAdvancedToggleProps extends StructIntersectAll<[RecipeToggleBaseProps]> {
	label?: string;
	checked?: boolean;
	onValueInput?: (value: boolean) => void;
	onValueChange?: (value: boolean) => void;
	onChange?: (value: boolean) => void;
}
