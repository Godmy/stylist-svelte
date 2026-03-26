import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';

export interface Model {
	id: string;
	name: string;
	description: string;
	capabilities: string[];
	provider: string;
	version: string;
	tags?: string[];
}

export interface ModelSelectorProps extends InteractionHTMLAttributes<HTMLDivElement> {
	models?: Model[];
	selectedModel?: string;
	onModelSelect?: (modelId: string) => void;
	showTags?: boolean;
	showCapabilities?: boolean;
	placeholder?: string;
	class?: string;
	dropdownClass?: string;
	modelItemClass?: string;
	headerClass?: string;
}
