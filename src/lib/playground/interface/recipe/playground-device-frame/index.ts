import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { PlaygroundCanvasShellViewportSize } from '$stylist/playground/type/struct/playground-canvas-shell-viewport-size';

export interface RecipePlaygroundDeviceFrame
	extends ComputeIntersectAll<
		[Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography, SlotChildren]
	> {
	device?: PlaygroundCanvasShellViewportSize;
	orientation?: 'portrait' | 'landscape';
	class?: string;
}
