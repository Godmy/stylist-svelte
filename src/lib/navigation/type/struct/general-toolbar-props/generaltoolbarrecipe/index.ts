import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { ToolbarItem } from '../toolbar-item';

export type GeneralToolbarRecipe = ThemeAttributes<HTMLDivElement> & {
	toolbarItems?: ToolbarItem[];
	compact?: boolean;
	disabled?: boolean;
	class?: string;
};
