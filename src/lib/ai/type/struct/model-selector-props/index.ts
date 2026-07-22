import type { HTMLAttributes } from 'svelte/elements';
import type { Model } from '$stylist/ai/type/struct/model';

export type ModelSelectorProps = HTMLAttributes<HTMLDivElement> & {
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
};
