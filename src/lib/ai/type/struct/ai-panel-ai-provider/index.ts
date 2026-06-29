import type { AiPanelAIOption } from '$stylist/ai/type/struct/ai-panel-ai-option';

export type AiPanelAIProvider = {
	id: string;
	name: string;
	options: AiPanelAIOption[];
};
