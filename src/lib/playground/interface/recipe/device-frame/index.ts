import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { PlaygroundCanvasShellViewportSize as ShellCanvasViewportSize } from '$stylist/playground/type/alias/playground-canvas-shell-viewport-size';

export interface RecipeDeviceFrame
	extends ComputeIntersectAll<
		[Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, SlotTypography, SlotChildren]
	> {
	device?: ShellCanvasViewportSize;
	orientation?: 'portrait' | 'landscape';
	class?: string;
}

