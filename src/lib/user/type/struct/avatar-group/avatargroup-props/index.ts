import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { AvatarGroupAvatar } from '$stylist/user/type/struct/avatar-group/avatargroupavatar';

export type AvatarGroupProps = {
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
} & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography;
