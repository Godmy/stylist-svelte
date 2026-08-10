import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

import type { PlaygroundAiAssistantAIProviderId as AiAssistantAIProviderId } from '$stylist/ai/type/alias/playground-ai-assistant-ai-provider-id';
import type { AiAssistantAIClientLike } from '$stylist/ai/type/struct/ai-assistant-ai-client-like';

export interface RecipeAiAssistant
	extends ComputeIntersectAll<[SlotThemeBorder, SlotTypography]> {
	/** AI Provider identifier */
	providerId?: AiAssistantAIProviderId;
	/** Function to create AI client */
	createAIClient?: ((
	providerId: AiAssistantAIProviderId
) => AiAssistantAIClientLike);
	/** Callback when panel is closed */
	onClose?: () => void;

	class?: string;
}
