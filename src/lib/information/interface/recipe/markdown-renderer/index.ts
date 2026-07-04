import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { MarkdownRendererProps as MarkdownRendererProps } from '$stylist/information/type/struct/markdown-renderer-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeMarkdownRenderer
	extends ComputeIntersectAll<
		[
			MarkdownRendererProps,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			SlotThemeBorder,
			SlotTypography
		]
	> {
	markdown?: string;
	class?: string;
}
