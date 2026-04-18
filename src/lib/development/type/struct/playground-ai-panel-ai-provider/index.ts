import type { PlaygroundAiPanelAIOption } from '$stylist/development/type/struct/playground-ai-panel-ai-option';

export type PlaygroundAiPanelAIProvider = {
	id: string;
	name: string;
	options: PlaygroundAiPanelAIOption[];
};
