import type { TOKEN_SIZE } from '$stylist/theme/const/array/size';
import type { AvatarUserStatus } from '$stylist/user/type/alias/avatar-user-status';
import type { AvatarGroupProps as LegacyAvatarProps4 } from '$stylist/user/type/struct/avatar-group/avatargroup-props';
import type { AvatarGroupProps as LegacyAvatarProps2 } from '$stylist/user/interface/recipe/avatar-group-avatar-group-props';
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
			ComputeIntersectAll<[]> & {
variant?: 'default';
	size?: (typeof TOKEN_SIZE)[number];
	src?: string;
	alt?: string;
	id?: string;
	name?: string;
	status?: AvatarUserStatus;
	showStatus?: boolean;
	children?: any;
	class?: string;
},
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
