import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';

export interface IIconPickerRestProps extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {}

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
