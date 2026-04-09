import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export type ToolbarItem = {
	id: string;
	label: string;
	icon: string;
	action: () => void;
};

export interface GeneralToolbarRecipe extends ThemeAttributes<HTMLDivElement> {
	toolbarItems?: ToolbarItem[];
	compact?: boolean;
	disabled?: boolean;
	class?: string;
}
