import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { GenericCodeViewerProps as GenericCodeViewerProps } from '$stylist/development/type/struct/generic-code-viewer-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeGenericCodeViewer
	extends ComputeIntersectAll<[GenericCodeViewerProps, SlotThemeBorder, SlotTypography]> {
	class?: string;
}
