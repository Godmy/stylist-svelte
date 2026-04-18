import type { PlaygroundAiAssistantChatResponse } from '$stylist/development/type/struct/playground-ai-assistant-chat-response';

export type PlaygroundAiAssistantAIClientLike = {
	chat: (params: { prompt: string; autoApproveTools?: boolean }) => Promise<PlaygroundAiAssistantChatResponse>;
	resetSession: () => void;
	getSessionId: () => string | null;
}
