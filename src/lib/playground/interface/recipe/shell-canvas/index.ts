import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { ShellCanvasProps as ShellCanvasProps } from '$stylist/playground/type/struct/shell-canvas-props';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeShellCanvas
	extends ComputeIntersectAll<
		[
			ShellCanvasProps,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			SlotThemeBorder,
			SlotTypography,
			SlotChildren
		]
	> {
	class?: string;
}
