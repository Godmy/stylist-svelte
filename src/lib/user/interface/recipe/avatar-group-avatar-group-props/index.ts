import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface AvatarGroupProps extends ComputeIntersectAll<[]> {
	avatars?: Record<string, unknown>[];
	maxVisible?: number;
	size?: 'sm' | 'md' | 'lg';
	stackDirection?: 'horizontal' | 'vertical';
	showStatus?: boolean;
	showTooltip?: boolean;
	class?: string;
	avatarClass?: string;
	overflowClass?: string;
	tooltipClass?: string;
}
