import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { AiAssistantProps as AiAssistantProps } from '$stylist/ai/type/struct/ai-assistant-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeAiAssistant
	extends ComputeIntersectAll<
		[AiAssistantProps, Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, BehaviorTypography]
	> {
	class?: string;
}
