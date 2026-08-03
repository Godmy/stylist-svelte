import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { CodeViewerProps as CodeViewerProps } from '$stylist/development/type/struct/code-viewer-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeCodeViewer
	extends ComputeIntersectAll<[CodeViewerProps, SlotThemeBorder, SlotTypography]> {
	code?: string;
	language?: string;
	readonly?: boolean;
	class?: string;
}
