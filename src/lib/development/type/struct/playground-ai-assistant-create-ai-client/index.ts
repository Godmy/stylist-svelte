import type { PlaygroundAiAssistantAIProviderId } from '$stylist/development/type/struct/playground-ai-assistant-ai-provider-id';
import type { PlaygroundAiAssistantAIClientLike } from '$stylist/development/type/struct/playground-ai-assistant-ai-client-like';

export type PlaygroundAiAssistantCreateAIClient = (providerId: PlaygroundAiAssistantAIProviderId) => PlaygroundAiAssistantAIClientLike;
