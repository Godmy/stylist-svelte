import type { TOKEN_SIZE } from '$stylist/theme/const/array/size';
import type { AvatarUserStatus } from '$stylist/user/type/alias/avatar-user-status';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { AvatarGroupAvatar } from '$stylist/user/type/object/avatar-group/avatargroupavatar';
import type { AvatarGroupProps } from '$stylist/user/interface/recipe/avatar-group-avatar-group-props';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotImage } from '$stylist/image/interface/slot/image';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotStatus } from '$stylist/information/interface/slot/status';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { BehaviorClickable } from '$stylist/layout/interface/behavior/clickable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
export interface RecipeAvatar
	extends ComputeIntersectAll<
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
			AvatarGroupProps,
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
			SlotImage,
			SlotText,
			SlotStatus,
			SlotBadge,
			BehaviorClickable,
			BehaviorSizable,
			HTMLAttributes<HTMLDivElement>
		]
	> {}
