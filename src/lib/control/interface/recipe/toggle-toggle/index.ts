import type { HTMLAttributes } from 'svelte/elements';
import type { SlotToggle as BaseToggleProps } from '$stylist/control/interface/slot/toggle-toggles';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeToggle
	extends ComputeIntersectAll<[BaseToggleProps, HTMLAttributes<HTMLInputElement>]> {}
