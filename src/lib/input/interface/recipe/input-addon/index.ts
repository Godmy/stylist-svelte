import type { SlotInputAddon } from '$stylist/input/interface/slot/input-addon';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeInputAddon
	extends ComputeIntersectAll<[SlotInputAddon, { position?: 'left' | 'right' }]> {}
