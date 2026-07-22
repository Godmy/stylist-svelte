import type { HTMLAttributes } from 'svelte/elements';
import type { SlotInputField as BaseInputFieldProps } from '$stylist/input/interface/slot/input-field';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeInputFieldProps
	extends ComputeIntersectAll<[BaseInputFieldProps, HTMLAttributes<HTMLInputElement>]> {}
