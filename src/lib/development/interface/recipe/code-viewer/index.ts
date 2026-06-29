import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { CodeViewerProps as CodeViewerProps } from '$stylist/development/type/struct/code-viewer-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeCodeViewer
	extends ComputeIntersectAll<
		[CodeViewerProps, Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography]
	> {
	code?: string;
	language?: string;
	readonly?: boolean;
	class?: string;
}
