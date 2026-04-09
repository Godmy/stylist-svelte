import type { Snippet } from 'svelte';
import type { NodeHeaderRecipe } from '$stylist/science/interface/recipe/node-header';

export type NodeHeaderProps = NodeHeaderRecipe & {
	id?: string;
	title?: string;
	actions?: Snippet;
	onTitleChange?: (value: string) => void;
	onclose?: () => void;
	onsettings?: () => void;
	onduplicate?: () => void;
	ondelete?: () => void;
};
