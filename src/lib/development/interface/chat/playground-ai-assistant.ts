export type AIProviderId = 'gemini' | 'qwen' | 'claude' | 'codex';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChatResponse {
  text?: string;
}

export interface AIClientLike {
  chat: (params: { prompt: string; autoApproveTools?: boolean }) => Promise<ChatResponse>;
  resetSession: () => void;
  getSessionId: () => string | null;
}

export type CreateAIClient = (providerId: AIProviderId) => AIClientLike;

export interface Props {
  providerId?: AIProviderId;
  createAIClient?: CreateAIClient;
  onClose?: () => void;
}
