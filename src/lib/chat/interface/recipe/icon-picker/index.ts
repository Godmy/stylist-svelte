import type { HTMLAttributes } from 'svelte/elements';
import type { ThemeIconItem } from '$stylist/chat/interface/slot/icon-picker';

export interface RecipeIconPicker extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	icons: ThemeIconItem[];
	title?: string;
	searchPlaceholder?: string;
	selectedIcon?: string;
	columns?: number;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	onIconSelect?: (icon: ThemeIconItem) => void;
	showSearch?: boolean;
	showCategories?: boolean;
}
