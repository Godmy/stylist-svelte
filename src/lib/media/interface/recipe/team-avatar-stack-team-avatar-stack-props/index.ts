import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface TeamAvatarStackProps extends ComputeIntersectAll<[]> {
	members?: Record<string, unknown>[];
	maxVisible?: number;
	showStatus?: boolean;
	showTooltip?: boolean;
	size?: 'sm' | 'md' | 'lg';
	stackDirection?: 'horizontal' | 'vertical';
	class?: string;
	avatarClass?: string;
	tooltipClass?: string;
}
