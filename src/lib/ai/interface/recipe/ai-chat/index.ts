import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeAiChat
	extends ComputeIntersectAll<[SlotThemeBorder, SlotTypography]> {
	/** Callback when panel is closed */
	onClose?: () => void;

	class?: string;
}
