import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { MarkdownRendererProps as MarkdownRendererProps } from '$stylist/information/type/struct/markdown-renderer-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeMarkdownRenderer
	extends ComputeIntersectAll<
		[
			MarkdownRendererProps,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			BehaviorBorderToken,
			BehaviorTypography
		]
	> {
	markdown?: string;
	class?: string;
}
