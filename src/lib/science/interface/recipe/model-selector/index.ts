import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { ScienceHTMLAttributes } from '$stylist/science/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/science/interface/slot';
import type { Snippet } from 'svelte';
import type { SlotModelOption } from '$stylist/science/interface/slot/model-option';

export interface RecipeModelSelector extends StructIntersectAll<[]> {
	models?: SlotModelOption[];
	selectedModel?: string;
	onModelSelect?: (modelId: string) => void;
	showTags?: boolean;
	showCapabilities?: boolean;
	placeholder?: string;
	class?: string;
	dropdownClass?: string;
	modelItemClass?: string;
	headerClass?: string;	children?: Snippet;
}
