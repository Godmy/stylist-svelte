import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { AvatarGroupAvatar } from '$stylist/media/type/struct/avatar-group/avatargroupavatar';

export type AvatarGroupProps = {
	avatars?: AvatarGroupAvatar[];
	maxVisible?: number;
	size?: 'sm' | 'md' | 'lg';
	showTooltip?: boolean;
	tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
	class?: string;
	avatarClass?: string;
	overflowClass?: string;
} & HTMLAttributes<HTMLDivElement> & BehaviorBorderToken & BehaviorTypography;
