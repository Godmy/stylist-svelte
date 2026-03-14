import type { HTMLAttributes } from 'svelte/elements';

export interface IIconPickerRestProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {}

export interface IIconItem {
	name: string;
	component: any;
	category?: string;
	keywords?: string[];
}

export interface IIconPickerProps extends IIconPickerRestProps {
	icons: IIconItem[];
	title?: string;
	searchPlaceholder?: string;
	selectedIcon?: string;
	columns?: number;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	onIconSelect?: (icon: IIconItem) => void;
	showSearch?: boolean;
	showCategories?: boolean;
}
