import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeSessionManager
	extends ComputeIntersectAll<
		[
			HTMLAttributes<HTMLDivElement> & {
				activeSessions?: number;
				expiresAt?: string;
				class?: string;
			}
		]
	> {}
