import type { PlaygroundAiAssistantAIProviderId } from '$stylist/playground/type/struct/playground-ai-assistant-ai-provider-id';
import type { PlaygroundAiAssistantCreateAIClient } from '$stylist/playground/type/struct/playground-ai-assistant-create-ai-client';

export type PlaygroundAiAssistantProps = {
	/** AI Provider identifier */
	providerId?: PlaygroundAiAssistantAIProviderId;
	/** Function to create AI client */
	createAIClient?: PlaygroundAiAssistantCreateAIClient;
	/** Callback when panel is closed */
	onClose?: () => void;
};
