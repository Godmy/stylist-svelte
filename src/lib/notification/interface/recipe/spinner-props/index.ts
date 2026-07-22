import type { HTMLAttributes } from 'svelte/elements';
import type { SlotSpinner as BaseSpinnerProps } from '$stylist/notification/interface/slot/spinner';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeSpinnerProps
	extends ComputeIntersectAll<[BaseSpinnerProps, HTMLAttributes<HTMLDivElement>]> {}
