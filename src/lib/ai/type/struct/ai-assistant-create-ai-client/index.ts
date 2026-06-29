import type { PlaygroundAiAssistantAIProviderId as AiAssistantAIProviderId } from '$stylist/ai/type/alias/playground-ai-assistant-ai-provider-id';
import type { AiAssistantAIClientLike } from '$stylist/ai/type/struct/ai-assistant-ai-client-like';

export type AiAssistantCreateAIClient = (
	providerId: AiAssistantAIProviderId
) => AiAssistantAIClientLike;

