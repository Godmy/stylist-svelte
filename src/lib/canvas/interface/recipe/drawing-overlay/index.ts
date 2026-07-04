import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { DrawingOverlayProps as DrawingOverlayProps } from '$stylist/canvas/type/struct/drawing-overlay-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeDrawingOverlay
	extends ComputeIntersectAll<
		[DrawingOverlayProps, Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, BehaviorTypography]
	> {
	class?: string;
}
