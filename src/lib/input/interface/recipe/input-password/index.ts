import type { SlotInputPassword } from '$stylist/input/interface/slot/input-password';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLInputAttributes } from 'svelte/elements';

export interface RecipeInputPassword
	extends ComputeIntersectAll<
		[
			SlotInputPassword,
			Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>
		]
	> {}
