import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Model } from '../model';

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
