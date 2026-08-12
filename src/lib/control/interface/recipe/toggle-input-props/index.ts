import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLInputAttributes } from 'svelte/elements';
import type { RecipeToggleBaseProps } from '$stylist/control/interface/recipe/toggle-base-props';
export interface RecipeToggleInputProps
	extends ComputeIntersectAll<
		[Omit<HTMLInputAttributes, 'size' | 'disabled' | 'checked' | 'class'>, RecipeToggleBaseProps]
	> {
	checked?: boolean;
}
