import type { HTMLAttributes } from 'svelte/elements';
import type { SlotRadio } from '$stylist/control/interface/slot/radio-toggles';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeRadio
	extends ComputeIntersectAll<[SlotRadio, HTMLAttributes<HTMLInputElement>]> {}
