import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { ErrorBoundaryProps as ErrorBoundaryProps } from '$stylist/development/type/struct/error-boundary-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeErrorBoundary
	extends ComputeIntersectAll<
		[ErrorBoundaryProps,  SlotThemeBorder, SlotTypography]
	> {
	class?: string;
}
