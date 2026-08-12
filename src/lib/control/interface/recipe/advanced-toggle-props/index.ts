import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RecipeToggleBaseProps } from '$stylist/control/interface/recipe/toggle-base-props';
export interface RecipeAdvancedToggleProps extends ComputeIntersectAll<[RecipeToggleBaseProps]> {
	label?: string;
	checked?: boolean;
	onValueInput?: (value: boolean) => void;
	onValueChange?: (value: boolean) => void;
	onChange?: (value: boolean) => void;
}
