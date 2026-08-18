import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { AvatarGroupAvatar } from '$stylist/user/type/object/avatar-group/avatargroupavatar';
import type { RecipeAvatarGroupAvatarGroupProps } from '$stylist/user/interface/recipe/avatar-group-avatar-group-props';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotImage } from '$stylist/image/interface/slot/image';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotStatus } from '$stylist/ai/interface/slot/status';
import type { SlotBadge } from '$stylist/layout/interface/slot/badge';
import type { BehaviorClickable } from '$stylist/layout/interface/behavior/clickable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';

export interface RecipeAvatarGroup extends ComputeIntersectAll<
		[
			({
	avatars?: AvatarGroupAvatar[];
	maxVisible?: number;
	size?: 'sm' | 'md' | 'lg';
	stackDirection?: 'horizontal' | 'vertical';
	showStatus?: boolean;
	showTooltip?: boolean;
	class?: string;
	avatarClass?: string;
	overflowClass?: string;
	tooltipClass?: string;
} & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography),
			RecipeAvatarGroupAvatarGroupProps,
			SlotTheme,
			SlotImage,
			SlotText,
			SlotStatus,
			SlotBadge,
			BehaviorClickable,
			BehaviorSizable,
			HTMLAttributes<HTMLDivElement>
		]
	> {}
