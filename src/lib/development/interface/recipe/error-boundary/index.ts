import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ErrorBoundaryProps as ErrorBoundaryProps } from '$stylist/development/type/struct/error-boundary-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeErrorBoundary
	extends ComputeIntersectAll<
		[ErrorBoundaryProps, Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, BehaviorTypography]
	> {
	class?: string;
}
