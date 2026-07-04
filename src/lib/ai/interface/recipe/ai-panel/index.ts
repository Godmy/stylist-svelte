import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { AiPanelProps as AiPanelProps } from '$stylist/ai/type/struct/ai-panel-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeAiPanel
	extends ComputeIntersectAll<
		[AiPanelProps, Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, SlotTypography]
	> {
	class?: string;
}
