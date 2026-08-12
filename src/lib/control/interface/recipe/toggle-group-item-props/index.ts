import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLButtonAttributes } from 'svelte/elements';
export interface RecipeToggleGroupItemProps
	extends ComputeIntersectAll<[Omit<HTMLButtonAttributes, 'class'>]> {
	value: string;
	disabled?: boolean;
	class?: string;
}
