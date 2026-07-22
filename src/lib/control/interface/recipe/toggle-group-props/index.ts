import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeToggleGroupRootProps as BaseToggleGroupProps } from '$stylist/control/interface/recipe/toggle-group-root-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeToggleGroupProps
	extends ComputeIntersectAll<[BaseToggleGroupProps, HTMLAttributes<HTMLButtonElement>]> {}
