
import type { ContractWishlistButton } from '$stylist/product/interface/contract/wishlist-button';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { BehaviorClickable } from '$stylist/layout/interface/behavior/clickable';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeWishlistButton
	extends ComputeIntersectAll<[ContractWishlistButton, SlotTheme, SlotText, SlotIcon, SlotBadge, BehaviorClickable]> {
	onToggle?: (inWishlist: boolean) => void;
	onSuccess?: () => void;
	onError?: (error: string) => void;

	disabled?: boolean;
}
