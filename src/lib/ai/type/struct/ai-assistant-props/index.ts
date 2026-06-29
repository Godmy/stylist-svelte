import type { PlaygroundAiAssistantAIProviderId as AiAssistantAIProviderId } from '$stylist/ai/type/alias/playground-ai-assistant-ai-provider-id';
import type { AiAssistantCreateAIClient } from '$stylist/ai/type/struct/ai-assistant-create-ai-client';

export type AiAssistantProps = {
	/** AI Provider identifier */
	providerId?: AiAssistantAIProviderId;
	/** Function to create AI client */
	createAIClient?: AiAssistantCreateAIClient;
	/** Callback when panel is closed */
	onClose?: () => void;
};

