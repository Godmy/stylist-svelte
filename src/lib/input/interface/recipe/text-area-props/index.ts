import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotTextarea as BaseTextAreaProps } from '$stylist/input/interface/slot/textarea';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeTextAreaProps
	extends ComputeIntersectAll<
		[BaseTextAreaProps, HTMLAttributes<HTMLTextAreaElement>, SlotInteraction]
	> {}
