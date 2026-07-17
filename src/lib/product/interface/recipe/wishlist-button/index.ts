import type { BehaviorWishlistButtonEvents } from '$stylist/product/interface/behavior/wishlist-button-events';
import type { ContractWishlistButton } from '$stylist/product/interface/contract/wishlist-button';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
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
	disabled?: boolean;
}
