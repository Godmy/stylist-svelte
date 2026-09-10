import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
export interface RecipeAuthGuard
	extends ComputeIntersectAll<[SlotTheme, SlotText, HTMLAttributes<HTMLDivElement>]> {
	isAuthenticated?: boolean;
	requiredRole?: string;
	allowedRoles?: string[];
	userRoles?: string[];
	redirectUrl?: string;
	showLoadingState?: boolean;
	onAuthChange?: (isAuthorized: boolean) => void;
	onContactAdmin?: () => void;
	hostClass?: string;
	contentClass?: string;
	fallbackClass?: string;
}
