import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type AvatarGroupAvatar = {
	id: string;
	name: string;
	src?: string;
	status?: 'online' | 'offline' | 'away' | 'busy';
	onClick?: () => void;
};

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
