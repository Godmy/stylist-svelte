import type { SlotInputName } from '$stylist/input/interface/slot/input-name';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLInputAttributes } from 'svelte/elements';

export interface RecipeInputName
	extends ComputeIntersectAll<
		[
			SlotInputName,
			Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>
		]
	> {}
