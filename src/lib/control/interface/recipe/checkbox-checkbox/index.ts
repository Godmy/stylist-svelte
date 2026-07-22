import type { HTMLAttributes } from 'svelte/elements';
import type { SlotCheckbox as BaseCheckboxProps } from '$stylist/control/interface/slot/checkbox-toggles';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeCheckbox
	extends ComputeIntersectAll<[BaseCheckboxProps, HTMLAttributes<HTMLInputElement>]> {}
