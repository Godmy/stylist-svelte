import type { AvatarGroupProps as LegacyAvatarProps4 } from '$stylist/user/type/struct/avatar-group/avatargroup-props';
import type { AvatarGroupProps as LegacyAvatarProps2 } from '$stylist/user/interface/recipe/avatar-group-avatar-group-props';
import type { AvatarProps as LegacyAvatarProps1 } from '$stylist/user/interface/recipe/avatar-avatar-props';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotImage as IMediaSlot } from '$stylist/image/interface/slot/image';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { BehaviorClickable as IClickable } from '$stylist/layout/interface/behavior/clickable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';

export interface RecipeAvatar
	extends ComputeIntersectAll<
		[
			LegacyAvatarProps4,
			LegacyAvatarProps2,
			LegacyAvatarProps1,
			SlotTheme,
			IMediaSlot,
			ILabelSlot,
			IStatusSlot,
			IBadgeSlot,
			IClickable,
			ISizable,
			HTMLAttributes<HTMLDivElement>
		]
	> {}
