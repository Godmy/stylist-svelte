import type { SlotInputGroup } from '$stylist/input/interface/slot/input-group';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLInputAttributes } from 'svelte/elements';

export interface RecipeInputGroup
	extends ComputeIntersectAll<
		[
			SlotInputGroup,
			Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>
		]
	> {}
