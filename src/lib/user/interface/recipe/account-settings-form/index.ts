import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeAccountSettings } from '$stylist/user/interface/recipe/account-settings';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeAccountSettingsForm
	extends ComputeIntersectAll<[RecipeAccountSettings, ((HTMLAttributes<HTMLFormElement> & {
name?: string;
	email?: string;
	locale?: string;
	class?: string;
}))]> {}

