import type { AiAssistantChatResponse } from '$stylist/ai/type/struct/ai-assistant-chat-response';

export type AiAssistantAIClientLike = {
	chat: (params: {
		prompt: string;
		autoApproveTools?: boolean;
	}) => Promise<AiAssistantChatResponse>;
	resetSession: () => void;
	getSessionId: () => string | null;
};
