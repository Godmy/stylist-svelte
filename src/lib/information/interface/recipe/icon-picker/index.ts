import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ThemeIconItem } from '$stylist/information/interface/slot/icon-picker';

export interface RecipeThemeIconPicker
	extends ComputeIntersectAll<[Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotInteraction]> {
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
