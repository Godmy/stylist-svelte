import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface AvatarGroupProps extends ComputeIntersectAll<[]> {
	avatars?: Record<string, unknown>[];
	maxVisible?: number;
	size?: 'sm' | 'md' | 'lg';
	showTooltip?: boolean;
	tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
	class?: string;
	avatarClass?: string;
	overflowClass?: string;
}
