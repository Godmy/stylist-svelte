import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeSecuritySettings
	extends ComputeIntersectAll<
		[
			HTMLAttributes<HTMLFormElement> & {
				twoFactor?: boolean;
				loginAlerts?: boolean;
				class?: string;
			}
		]
	> {}
