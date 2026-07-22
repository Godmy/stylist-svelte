import type { HTMLAttributes } from 'svelte/elements';
import type { SlotSwitch } from '$stylist/control/interface/slot/switch';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeSwitch
	extends ComputeIntersectAll<[SlotSwitch, HTMLAttributes<HTMLInputElement>]> {}
