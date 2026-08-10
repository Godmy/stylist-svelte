import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeDrawingOverlay
	extends ComputeIntersectAll<[SlotThemeBorder, SlotTypography]> {
	drawColor?: string;
	onClose?: () => void;

	class?: string;
}
