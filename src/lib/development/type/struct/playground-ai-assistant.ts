export type AIProviderId = 'gemini' | 'qwen' | 'claude' | 'codex';

export type ChatMessage = {
	role: 'user' | 'assistant';
	content: string;
	timestamp: number;
}

export type ChatResponse = {
	text?: string;
}

export type AIClientLike = {
	chat: (params: { prompt: string; autoApproveTools?: boolean }) => Promise<ChatResponse>;
	resetSession: () => void;
	getSessionId: () => string | null;
}

export type CreateAIClient = (providerId: AIProviderId) => AIClientLike;

export type Props = {
	/** AI Provider identifier */
	providerId?: AIProviderId;
	/** Function to create AI client */
	createAIClient?: CreateAIClient;
	/** Callback when panel is closed */
	onClose?: () => void;
};
