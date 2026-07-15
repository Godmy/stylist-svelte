import type { SlotInputEmail } from '$stylist/input/interface/slot/input-email';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLInputAttributes } from 'svelte/elements';

export interface RecipeInputEmail
	extends ComputeIntersectAll<
		[
			SlotInputEmail,
			Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>
		]
	> {}
