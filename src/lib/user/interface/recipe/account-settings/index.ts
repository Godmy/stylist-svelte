import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeAccountSettings
	extends ComputeIntersectAll<[HTMLAttributes<HTMLFormElement>]> {
	showEmailChange?: boolean;
	showPasswordChange?: boolean;
	showDeleteAccount?: boolean;
	showTwoFactor?: boolean;
	loading?: boolean;
	class?: string;
	onSubmit?: (settings: { email?: string; password?: string; twoFactorEnabled?: boolean }) => void;
	onDeleteAccount?: () => void;
}
