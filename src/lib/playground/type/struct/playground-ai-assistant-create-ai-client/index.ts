import type { PlaygroundAiAssistantAIProviderId } from '$stylist/playground/type/struct/playground-ai-assistant-ai-provider-id';
import type { PlaygroundAiAssistantAIClientLike } from '$stylist/playground/type/struct/playground-ai-assistant-ai-client-like';

export type PlaygroundAiAssistantCreateAIClient = (providerId: PlaygroundAiAssistantAIProviderId) => PlaygroundAiAssistantAIClientLike;
