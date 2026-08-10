import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeSecureForm extends ComputeIntersectAll<[((HTMLAttributes<HTMLFormElement> & {
token?: string;
	class?: string;
}))]> {}

