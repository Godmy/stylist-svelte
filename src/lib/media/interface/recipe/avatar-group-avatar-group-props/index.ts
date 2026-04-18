import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface AvatarGroupProps extends StructIntersectAll<[]> {
	avatars: Record<string, unknown>[];
	maxVisible?: number;
	size?: 'sm' | 'md' | 'lg';
	showTooltip?: boolean;
	tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
	class?: string;
	avatarClass?: string;
	overflowClass?: string;
}
