import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { AiChatProps as AiChatProps } from '$stylist/ai/type/struct/ai-chat-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeAiChat
	extends ComputeIntersectAll<
		[AiChatProps, Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, SlotTypography]
	> {
	class?: string;
}
