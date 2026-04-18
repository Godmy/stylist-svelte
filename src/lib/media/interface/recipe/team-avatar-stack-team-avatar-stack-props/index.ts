import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface TeamAvatarStackProps extends StructIntersectAll<[]> {
	members: Record<string, unknown>[];
	maxVisible?: number;
	showStatus?: boolean;
	showTooltip?: boolean;
	size?: 'sm' | 'md' | 'lg';
	stackDirection?: 'horizontal' | 'vertical';
	class?: string;
	avatarClass?: string;
	tooltipClass?: string;
}
