import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotButtonAttributesBase } from '$stylist/button/interface/slot/button-attributes-base';

export interface RecipeSplitButtonProps
	extends ComputeIntersectAll<[SlotButtonAttributesBase, HTMLAttributes<HTMLButtonElement>]> {}
