import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface ThemeIconPickerRest extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {}

export interface ThemeIconItem {
	name: string;
	component: any;
	category?: string;
	keywords?: string[];
}

export interface ThemeIconPickerRecipe extends ThemeIconPickerRest {
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
