export type AiAssistantChatMessage = {
	role: 'user' | 'assistant';
	content: string;
	timestamp: number;
};
