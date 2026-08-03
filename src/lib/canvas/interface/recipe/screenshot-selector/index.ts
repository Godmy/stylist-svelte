import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { ScreenshotSelectorProps as ScreenshotSelectorProps } from '$stylist/canvas/type/struct/screenshot-selector-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeScreenshotSelector
	extends ComputeIntersectAll<[ScreenshotSelectorProps, SlotThemeBorder, SlotTypography]> {
	class?: string;
}
