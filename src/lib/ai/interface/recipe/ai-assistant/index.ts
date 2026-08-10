import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { AiAssistantProps } from '$stylist/ai/type/struct/ai-assistant-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeAiAssistant
	extends ComputeIntersectAll<[AiAssistantProps, SlotThemeBorder, SlotTypography]> {
	class?: string;
}
