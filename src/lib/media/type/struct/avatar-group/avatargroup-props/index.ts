import type { InformationHTMLAttributes } from '$stylist/information';
import type { AvatarGroupAvatar } from '../avatargroupavatar';

export type AvatarGroupProps = {
	avatars: AvatarGroupAvatar[];
	maxVisible?: number;
	size?: 'sm' | 'md' | 'lg';
	showTooltip?: boolean;
	tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
	class?: string;
	avatarClass?: string;
	overflowClass?: string;
} & InformationHTMLAttributes<HTMLDivElement>;
