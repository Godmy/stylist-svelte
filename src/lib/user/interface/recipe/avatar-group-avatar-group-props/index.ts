import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';
export interface RecipeAvatarGroupAvatarGroupProps extends ComputeIntersectAll<[]> {
	avatars?: Record<string, unknown>[];
	maxVisible?: number;
	size?: 'sm' | 'md' | 'lg';
	stackDirection?: TokenOrientation;
	showStatus?: boolean;
	showTooltip?: boolean;
	class?: string;
	avatarClass?: string;
	overflowClass?: string;
	tooltipClass?: string;
}
