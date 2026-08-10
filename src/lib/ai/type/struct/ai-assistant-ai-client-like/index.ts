
export type AiAssistantAIClientLike = {
	chat: (params: {
		prompt: string;
		autoApproveTools?: boolean;
	}) => Promise<{
	text?: string;
}>;
	resetSession: () => void;
	getSessionId: () => string | null;
};
