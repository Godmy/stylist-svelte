import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotStatus } from '$stylist/ai/interface/slot/status';
export interface RecipeAuthGuard
	extends ComputeIntersectAll<[SlotTheme, SlotText, SlotStatus, HTMLAttributes<HTMLDivElement>]> {
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
