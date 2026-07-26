import type { HTMLAttributes } from 'svelte/elements';
import type { SlotSpinner } from '$stylist/information/interface/slot/spinner';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeSpinner
	extends ComputeIntersectAll<[SlotSpinner, HTMLAttributes<HTMLSpanElement>]> {}
