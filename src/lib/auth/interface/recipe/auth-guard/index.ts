import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

export interface RecipeAuthGuard
	extends ComputeIntersectAll<[SlotTheme, ILabelSlot, IStatusSlot, HTMLAttributes<HTMLDivElement>]> {
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
