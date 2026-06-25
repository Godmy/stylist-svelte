import type { HTMLAttributes } from 'svelte/elements';
import type { ToolbarItem } from '$stylist/navigation/type/struct/general-toolbar-props/toolbar-item';

export type GeneralToolbarRecipe = HTMLAttributes<HTMLDivElement> & {
	toolbarItems?: ToolbarItem[];
	compact?: boolean;
	disabled?: boolean;
	class?: string;
};
