import type { RecipeToggleInputProps } from '$stylist/control/interface/recipe/toggle-input-props';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeRadio extends ComputeIntersectAll<[((RecipeToggleInputProps & {
value: string;
	label?: string;
})), HTMLAttributes<HTMLInputElement>]> {}
