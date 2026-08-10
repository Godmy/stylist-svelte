import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RecipeToggleInputProps } from '$stylist/control/interface/recipe/toggle-input-props';

export interface RecipeCheckbox
	extends ComputeIntersectAll<[RecipeToggleInputProps]> {
	id?: string;
	label?: string;
	description?: string;
	errors?: string[];
	required?: boolean;
	indeterminate?: boolean;
}
