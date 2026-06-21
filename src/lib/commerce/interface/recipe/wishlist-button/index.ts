import type { BehaviorWishlistButtonEvents } from '$stylist/commerce/interface/behavior/wishlist-button-events';
import type { ContractWishlistButton } from '$stylist/commerce/interface/contract/wishlist-button';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeWishlistButton
	extends ComputeIntersectAll<
		[
			ContractWishlistButton,
			SlotTheme,
			ILabelSlot,
			IIconSlot,
			IBadgeSlot,
			BehaviorClickable,
			BehaviorWishlistButtonEvents,
			HTMLAttributes<HTMLButtonElement>
		]
	> {
	inWishlist?: boolean;
	buttonClass?: string;
	showLabel?: boolean;
	disabled?: boolean;
	onToggle?: (inWishlist: boolean) => void;
	onSuccess?: () => void;
	onError?: (error: string) => void;
}