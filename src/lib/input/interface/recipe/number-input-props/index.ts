import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotNumberInput } from '$stylist/input/interface/slot/number-input';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeNumberInputProps
	extends ComputeIntersectAll<
		[SlotNumberInput, HTMLAttributes<HTMLInputElement>, SlotInteraction]
	> {}
